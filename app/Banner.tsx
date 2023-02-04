"use client";
import Logo from "@/components/Logo";
import { useQuery, gql } from "@apollo/client";
import React from "react";
import bgImg from "../assets/Background.png";
import Card from "./card";

const GET_POKEMONS = gql`
   query GetPokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
         results {
            id
            url
            name
            dreamworld
         }
      }
   }
`;

interface GetPokemonsData {
   pokemons: {
      results: {
         id: Number;
         url: String;
         name: String;
         dreamworld: String;
      }[];
   };
}

type Pokemon = {
   id: Number;
   url: String;
   name: String;
   dreamworld: String;
};

const Banner = () => {
   const { loading, error, data } = useQuery<GetPokemonsData>(GET_POKEMONS, {
      variables: {
         limit: 10,
         offset: 0,
      },
   });

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error?.message}...</p>;

   return (
      <section
         className={`lg:h-screen bg-no-repeat w-full bg-cover bg-center relative`}
         style={{ backgroundImage: `url(${bgImg.src})` }}
      >
         <Logo />

         <section className="grid grid-cols-5 place-items-center gap-20">
            {data?.pokemons?.results?.map((pokemon: Pokemon, i: number) => (
               <Card pokemon={pokemon} key={i}></Card>
            ))}
         </section>
      </section>
   );
};

export default Banner;
