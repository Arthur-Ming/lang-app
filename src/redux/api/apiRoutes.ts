const BASE_URL = 'http://localhost:8000';

enum resource {
  words = 'words',
  users = 'users',
  auth = 'auth',
}

interface IRoutes {
  [endpoint: string]: {
    getUrl: (...params: string[]) => string;
    isProtected: boolean;
  };
}

export const wordsRoutes: IRoutes = {
  words: {
    getUrl: (group = '0', page = '0') =>
      `${BASE_URL}/${resource.words}?page=${page}&group=${group}`,
    isProtected: false,
  },
};

export const userWordsRoutes: IRoutes = {
  words: {
    getUrl: () => `${BASE_URL}/${resource.users}/${resource.words}`,
    isProtected: true,
  },
  wordById: {
    getUrl: (wordId = ':wordId') => `${BASE_URL}/${resource.users}/${resource.words}/${wordId}`,
    isProtected: true,
  },
};

export const authRoutes: IRoutes = {
  user: {
    getUrl: () => `${BASE_URL}/${resource.auth}/user`,
    isProtected: true,
  },
  login: {
    getUrl: () => `${BASE_URL}/${resource.auth}/login`,
    isProtected: false,
  },
  register: {
    getUrl: () => `${BASE_URL}/${resource.auth}/register`,
    isProtected: false,
  },
};
