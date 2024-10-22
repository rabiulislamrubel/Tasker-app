/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			container: {
				center: true,
			},
			colors: {
				clifford: "#da373d",
			},
		},
  },
  plugins: [],
}