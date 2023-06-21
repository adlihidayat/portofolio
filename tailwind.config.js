/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      keyframes: {
        moveMobile: {
          '0%, 25%': { transform: 'translateY(0px)' },
          '25%, 50%': { transform: 'translateY(-160px)' },
          '50%, 75%': { transform: 'translateY(-320px)' },
          '75%, 100%': { transform: 'translateY(-440px)' },
          '100%, 0%': { transform: 'translateY(0px)' },
        },
        moveSm: {
          '0%, 25%': { transform: 'translateY(0px)' },
          '25%, 50%': { transform: 'translateY(-200px)' },
          '50%, 75%': { transform: 'translateY(-350px)' },
          '75%, 100%': { transform: 'translateY(-550px)' },
          '100%, 0%': { transform: 'translateY(0px)' },
        },
        moveMD: {
          '0%, 25%': { transform: 'translateY(0px)' },
          '25%, 50%': { transform: 'translateY(-240px)' },
          '50%, 75%': { transform: 'translateY(-470px)' },
          '75%, 100%': { transform: 'translateY(-670px)' },
          '100%, 0%': { transform: 'translateY(0px)' },
        },
        moveLg: {
          '0%, 25%': { transform: 'translateY(0px)' },
          '25%, 50%': { transform: 'translateY(-230px)' },
          '50%, 75%': { transform: 'translateY(-460px)' },
          '75%, 100%': { transform: 'translateY(-650px)' },
          '100%, 0%': { transform: 'translateY(0px)' },
        },
        moveXl: {
          '0%, 25%': { transform: 'translateY(0px)' },
          '25%, 50%': { transform: 'translateY(-260px)' },
          '50%, 75%': { transform: 'translateY(-520px)' },
          '75%, 100%': { transform: 'translateY(-750px)' },
          '100%, 0%': { transform: 'translateY(0px)' },
        },
        move2xl: {
          '0%, 25%': { transform: 'translateY(0px)' },
          '25%, 50%': { transform: 'translateY(-150px)' },
          '50%, 75%': { transform: 'translateY(-300px)' },
          '75%, 100%': { transform: 'translateY(-450px)' },
          '100%, 0%': { transform: 'translateY(0px)' },
        },
        projectMove1Mobile:{
          '0%, 50%': { transform: 'translateY(0.6px)' },
          '50%, 100%': { transform: 'translateY(1.2px)' },
          '100%, 0%': { transform: 'translateY(-1.2px)' },
        },
        projectMove1Dekstop:{
          '0%, 50%': { transform: 'translateY(2px)' },
          '50%, 100%': { transform: 'translateY(4px)' },
          '100%, 0%': { transform: 'translateY(-4px)' },
        },
        projectMove2Mobile:{
          '0%, 50%': { transform: 'translateY(-0.6px)' },
          '50%, 100%': { transform: 'translateY(-1.2px)' },
          '100%, 0%': { transform: 'translateY(1.2px)' },
        },
        projectMove2Dekstop:{
          '0%, 50%': { transform: 'translateY(-2px)' },
          '50%, 100%': { transform: 'translateY(-4px)' },
          '100%, 0%': { transform: 'translateY(4px)' },
        }
      },
      animation: {
        'slot-machine-mobile': '15s ease-in-out 1s infinite moveMobile',
        'slot-machine-sm': '15s ease-in-out 1s infinite moveSm',
        'slot-machine-md': '15s ease-in-out 1s infinite moveMD',
        'slot-machine-lg': '15s ease-in-out 1s infinite moveLg',
        'slot-machine-xl': '15s ease-in-out 1s infinite moveXl',
        'slot-machine-2xl': '15s ease-in-out 1s infinite move2xl',
        'project1-mobile': '2s ease-in-out 1s infinite projectMove1Mobile',
        'project1-dekstop': '2s ease-in-out 1s infinite projectMove1Dekstop',
        'project2-mobile': '2s ease-in-out 1s infinite projectMove2Mobile',
        'project2-dekstop': '2s ease-in-out 1s infinite projectMove2Dekstop',
      }
    },
  },
  plugins: [],
}
