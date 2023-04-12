/** @type {import('tailwindcss').Config} */
export default {
 content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      extend: {
        mapbox: {
          amber: '#F59E0B',
          blue: '#1f4e79',
          green: '#4caf50',
        },
      },
    },
    plugins: [],
  }
}
