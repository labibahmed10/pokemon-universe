import Univ_blog from "./univ_blog";
import brush from "../assets/Brush.png";
import Image from "next/image";
import imageUrl from "../assets/bg.png";

const Universe = () => {
   return (
      <section
         className={`flex bg-contain bg-no-repeat`}
         style={{
            backgroundImage: `url(${imageUrl.src})`,
         }}
      >
         {/* <Image className="" src={sidebar} alt="sidebar image"></Image> */}

         <section>
            <div className="text-center relative flex justify-center mt-10">
               <p className="text-5xl font-bold mt-5 text-primary_blue z-50">
                  Ash & Pikachu Arrive in <br /> Pokémon Universe
               </p>
               <Image className="absolute" src={brush} alt=""></Image>
            </div>

            <Univ_blog />
         </section>

         {/* <Image src={sidebar} alt="sidebar image"></Image> */}
      </section>
   );
};

export default Universe;
