/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
   content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            primary_blue: "#257bc4",
            primary_yellow: "#FFCB05",
            grass: "#9BCC50",
            fire: "#FC7C23",
            poison: "#B97FC9",
            bug: "#53a253",
            psychic: "#F366B9",
            water: "#4592C4",
            ice: "#3DC7EF",
            flying: "#BDBDBD",
            ghost: "#786752",
            fighting: "#92372e",
            dark: "#47382d",
            fairy: "#36B0DB",
            electric: "#FFC926",
            water: "#6BCFEB",
            ground: "#744E33",
            dragon: "#DAF16F",
            steel: "#11436C",
            normal: "#B56B3A",
         },
      },
   },
   plugins: [],
});
