import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import React from "react";

const GET_SPECIFIC_POKEMON = gql`
   query ($name: String!) {
      pokemon(name: $name) {
         id
         types {
            type {
               name
            }
         }
      }
   }
`;

interface GetSpecificPokemon {
   pokemon: {
      id: Number;
      order: Number;
      types: any;
   };
}

type Pokemon = {
   id: Number;
   url: String;
   name: String;
   dreamworld: String;
};

type Type = {
   name: String;
   slot: number;
   type: any;
};

// type BaseName = {
//    id: number;
//    url: String;
//    name: String;
// };

const Card = ({ pokemon }: { pokemon: Pokemon }) => {
   const { data, variables, error } = useQuery<GetSpecificPokemon>(GET_SPECIFIC_POKEMON, {
      variables: {
         name: pokemon?.name,
      },
   });

   console.log(data?.pokemon?.types);

   return (
      <div className=" min-w-[220px] max-w-[260px] min-h-[280px] bg-white p-3 rounded-md hover:bg-water cursor-pointer group">
         <div className="bg-slate-50 p-8 group-hover:bg-white rounded-lg relative">
            <Image
               className="lg:w-[160px] lg:h-[160px] mx-auto group-hover:scale-110 transition-all duration-500"
               width={100}
               height={100}
               alt="image of"
               src={pokemon?.dreamworld as string}
            ></Image>

            <p className="absolute top-2 left-5">
               #{pokemon.id.toString().padStart(3, "0")}
            </p>
         </div>

         <p className="text-base text-black group-hover:text-white font-semibold capitalize mt-3">
            {pokemon?.name}
         </p>

         <div>
            {data?.pokemon?.types?.map((type: Type, i: number) => {
               return (
                  <button className={`capitalize  bg-${type?.type?.name} btn`} key={i}>
                     {type.type.name}
                  </button>
               );
            })}
         </div>
      </div>
   );
};

export default Card;
