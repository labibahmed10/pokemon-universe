import Logo from "@/components/Logo";
import { url } from "inspector";
import React from "react";
import bgImg from "../../assets/Background.png";

const Banner = () => {
   return (
      <section
         className={`lg:h-screen bg-no-repeat w-full bg-cover bg-center relative`}
         style={{ backgroundImage: `url(${bgImg.src})` }}
      >
         <Logo />
      </section>
   );
};

export default Banner;
