/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        physical: '#bd8868',
        elemental: '#4dfbbd',
        nature: '#85CC52',
        frost: '#7DE9FF',
        arcane: '#2157EC',
        fire: '#F38135',
        shadow: '#721ABF',
        holy: '#E1CA4B',
        volcanic: '#f2fd6c',
        shadowflame: '#f55a1c',
        flamestrike: '#c9723e'
      }
    },
  },
  daisyui: {
    themes:["light","dark"]
  },
  plugins: [
    require('daisyui'),
  ],
}

