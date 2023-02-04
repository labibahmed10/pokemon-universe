/** @type {import('tailwindcss').Config} */
module.exports = {
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
            bug: "#9BCC50",
            bug1: "#53a253",
            poison: "#B97FC9",
            fire: "#FC7C23",
            psychic: "#F366B9",
            water: "#4592C4",
            // gradient: "background: linear-gradient(180deg, #FC7C23 0%, #F366B9 100%);",
         },
      },
   },
   plugins: [],
};
