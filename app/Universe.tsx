import Univ_blog from "./univ_blog";
import image from "../assets/Brush.png";
import Image from "next/image";

const Universe = () => {
   return (
      <section>
         <div className="text-center relative flex justify-center mt-10">
            <p className="text-5xl font-bold mt-5 text-primary_blue z-50">
               Ash & Pikachu Arrive in <br /> Pokémon Universe
            </p>
            <Image className="absolute" src={image} alt=""></Image>
         </div>

         <Univ_blog />
      </section>
   );
};

export default Universe;
