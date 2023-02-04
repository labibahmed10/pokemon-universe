import Image from "next/image";
import React from "react";

type Pokemon = {
   id: Number;
   url: String;
   name: String;
   image: String;
   dreamworld: String;
};

const Card = ({ pokemon }: { pokemon: Pokemon }) => {
   console.log(pokemon);
   return (
      <div>
         <Image
            className="w-32 h-32"
            width={100}
            height={100}
            alt="image of"
            src={pokemon?.dreamworld as string}
         ></Image>
         <p>{pokemon?.name}</p>
      </div>
   );
};

export default Card;
