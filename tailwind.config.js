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
    color: {
      'gray-100': 'rgb(201,209,217)',
      'gray-200': 'rgb(135,137,139)',
      'group-1': 'rgb(129,199,132)',
      'group-2': 'rgb(255,241,118)',
      'group-3': 'rgb(233, 179, 80)',
      'group-4': 'rgb(255,118,248)',
      'group-5': 'rgb(34,153,235)',
      'group-6': 'rgb(141, 87, 196)',
    },
    outlineColor: {
      highlite: 'rgb(255,165,0)',
      'blue-100': 'rgb(0,121,191)',
    },

    backgroundColor: {
      'modal-dark': 'rgba(0, 0, 0, 0.6)',
      'header-dark': 'rgb(22,27,34)',
      'main-dark': 'rgb(13,17,23)',
      'section-dark': 'rgb(33,36,41)',
      'gray-100': 'rgb(201,209,217)',
      'gray-200': 'rgb(135,137,139)',
      highlite: 'rgb(255,165,0)',
      'blue-100': 'rgb(0,121,191)',
      'blue-200': 'rgb(2, 65, 102)',
      //2, 65, 102
    },
    textColor: {
      'gray-100': 'rgb(201,209,217)',
      'gray-200': 'rgb(135,137,139)',
      'group-1': 'rgb(129,199,132)',
      'group-2': 'rgb(255,241,118)',
      'group-3': 'rgb(233, 179, 80)',
      'group-4': 'rgb(255,118,248)',
      'group-5': 'rgb(34,153,235)',
      'group-6': 'rgb(141, 87, 196)',
      'blue-100': 'rgb(0,121,191)',
      highlite: 'rgb(255,165,0)',
    },
  },
  plugins: [],
};
