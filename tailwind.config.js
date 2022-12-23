/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ochre: {
          50: '#fcfaf6',
          100: '#faf0cb',
          200: '#f3da97',
          300: '#e2b363',
          400: '#cd8739',
          500: '#b3661f',
          600: '#954c14',
          700: '#723911',
          800: '#4f270e',
          900: '#33180a',
        },
        green: {
          50: '#f4f7f5',
          100: '#e2f0ec',
          200: '#bee4d3',
          300: '#87c8a8',
          400: '#44a679',
          500: '#308950',
          600: '#28713a',
          700: '#23562f',
          800: '#193a24',
          900: '#11231a',
        },
        teal: {
          50: '#f4f8f7',
          100: '#e0f0f5',
          200: '#bae2e8',
          300: '#85c4cc',
          400: '#49a1a8',
          500: '#358285',
          600: '#2c686a',
          700: '#254f51',
          800: '#1b353a',
          900: '#112128',
        },
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/forms')],

  // safelist: [
  //  {
  //    pattern: /(bg|text|border|custom)-*/,
  //  },
  //  {
  //    pattern: /(p|m)*/,
  //  },
  // ],

  //  safelist: [
  //    {
  //      pattern: /.*/,
  //    },
  //  ],
};
