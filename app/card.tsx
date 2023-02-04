import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import React from "react";

const GET_SPECIFIC_POKEMON = gql`
   query pokemon($name: String!) {
      pokemon(name: $name) {
         id
         order
         types {
            type {
               name
            }
         }
      }
   }
`;





type Pokemon = {
   id: Number;
   url: String;
   name: String;
   dreamworld: String;
};

const Card = ({ pokemon }: { pokemon: Pokemon }) => {
   const { data, variables, error } = useQuery(GET_SPECIFIC_POKEMON, {
      variables: {
         name: pokemon?.name,
      },
   });

   console.log(data);

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
