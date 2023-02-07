"use client";

import Logo from "@/components/Logo";
import seeWidth from "@/extraQuery/seeWidth";
import { useQuery, gql } from "@apollo/client";
import React from "react";
import backgroundImage from "../assets/Background.png";
import Card from "./card";
import MobileView from "./mobileview";

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
   const state = seeWidth();
   const { loading, error, data } = useQuery<GetPokemonsData>(GET_POKEMONS, {
      variables: {
         limit: 10,
         offset: 0,
      },
   });

   const background = "https://i.postimg.cc/8CNxXp83/Background.png";

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error?.message}...</p>;

   return (
      <section
         className={`lg:h-screen bg-no-repeat w-full bg-cover bg-center relative`}
         style={{ backgroundImage: `url(${background})` }}
      >
         <Logo />

         <section className="grid lg:grid-cols-5 place-items-center lg:gap-14 lg:mx-60 lg:mt-16">
            {state ? (
               <MobileView results={data?.pokemons?.results} />
            ) : (
               data?.pokemons?.results?.map((pokemon: Pokemon, i: number) => (
                  <Card pokemon={pokemon} key={i}></Card>
               ))
            )}
         </section>
      </section>
   );
};

export default Banner;
