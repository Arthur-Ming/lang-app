/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    zIndex: {
      999: '999',
      100: '100',
    },

    backgroundColor: {
      'modal-dark': 'rgba(0, 0, 0, 0.6)',
      'header-dark': 'rgb(22,27,34)',
      'main-dark': 'rgb(13,17,23)',
      'section-dark': 'rgb(33,36,41)',
      high: 'orange',
    },
    textColor: {
      'gray-100': 'rgb(201,209,217)',
      'gray-200': 'rgb(135,137,139)',
    },
  },
  plugins: [],
};
