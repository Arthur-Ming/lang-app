// same as fetch, but throws FetchError in case of errors
// status >= 400 is an error
// network error / json error are errors

export default async function (url: string, params?: RequestInit) {
  let response;

  try {
    response = await fetch(url, params);
  } catch (err) {
    console.log((err as Error).name);
    if ((err as { name: string }).name == 'AbortError') {
      console.log((err as { name: string }).name);
    }
    throw new FetchError(response, 'Network error has occurred.');
  }

  let body;

  if (!response.ok) {
    let errorText = response.statusText; // Not Found (for 404)

    try {
      body = await response.json();

      errorText =
        (body.error && body.error.message) ||
        (body.data && body.data.error && body.data.error.message) ||
        errorText;
    } catch (error) {
      /* ignore failed body */
    }

    const message = `Error ${response.status}: ${errorText}`;

    throw new FetchError(response, body, message);
  }

  try {
    return await response.json();
  } catch (error: unknown) {
    throw new FetchError(response, null, (error as Error).message);
  }
}

export class FetchError extends Error {
  name = 'FetchError';
  response;
  body;

  constructor(response: Response | undefined, body: string | null, message = '') {
    super(message);
    this.response = response;
    this.body = body;
  }
}

// handle uncaught failed fetch through
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason instanceof FetchError) {
    alert(event.reason.message);
  }
});
