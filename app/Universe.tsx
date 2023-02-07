"use client";

import Univ_blog from "./univ_blog";
import brush from "../assets/Brush.png";
import Image from "next/image";
import imageUrl from "../assets/bg.png";

const Universe = () => {
   return (
      <section
         className={`flex bg-contain bg-no-repeat w-full`}
         style={{
            backgroundImage: `url(${imageUrl.src})`,
         }}
      >
         <section>
            <div className="text-center relative flex justify-center mt-10">
               <p className="lg:text-5xl text-3xl font-bold lg:mt-5 text-primary_blue z-50">
                  Ash & Pikachu Arrive in <br /> Pokémon Universe
               </p>
               <Image className="absolute w-72 lg:w-1/3" src={brush} alt=""></Image>
            </div>

            <Univ_blog />
         </section>
      </section>
   );
};

export default Universe;
