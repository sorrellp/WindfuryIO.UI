/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        physical: '#C37446',
        elemental: '#45gsd',
        nature: '#85CC52',
        frost: '#7DE9FF',
        arcane: '#2157EC',
        fire: '#F38135',
        shadow: '#721ABF',
        holy: '#E1CA4B'
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

