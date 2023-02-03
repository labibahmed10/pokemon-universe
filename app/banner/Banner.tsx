import { url } from "inspector";
import React from "react";
import bgImg from "../../assets/Background.png";

const Banner = () => {
   return (
      <section
         className={`lg:h-screen lg:w-full bg-cover bg-center relative`}
         style={{ backgroundImage: `url(${bgImg.src})` }}
      >

         
      </section>
   );
};

export default Banner;
