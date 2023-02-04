import Button from "@/components/Button";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

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
   type: any;
};

const Card = ({ pokemon }: { pokemon: Pokemon }) => {
   const { data, variables, error } = useQuery<GetSpecificPokemon>(GET_SPECIFIC_POKEMON, {
      variables: {
         name: pokemon?.name,
      },
   });

   return (
      <Link
         href={{
            pathname: `/${pokemon.name}`,
         }}
      >
         <div className="lg:w-[220px] lg:h-auto bg-white p-3 rounded-md hover:bg-water cursor-pointer group polygon-clip">
            <div className="bg-[#f2f2f2] p-8 group-hover:bg-white rounded-lg relative">
               <Image
                  className="lg:w-[155px] lg:h-[155px] mx-auto group-hover:scale-110 transition-all duration-500"
                  width={100}
                  height={100}
                  alt="image of"
                  src={pokemon?.dreamworld as string}
               ></Image>

               <p className="absolute top-2 left-3">
                  #{pokemon.id.toString().padStart(3, "0")}
               </p>
            </div>

            <p className="text-base group-hover:text-white font-semibold capitalize mt-3">
               {pokemon?.name}
            </p>

            <div className="space-x-3 mt-1">
               {data?.pokemon?.types?.map((type: Type, i: number) => (
                  <Button key={i} type={type.type} />
               ))}
            </div>
         </div>
      </Link>
   );
};

export default Card;
