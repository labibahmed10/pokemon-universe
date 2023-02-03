"use client";
import Logo from "@/components/Logo";
import { useQuery, gql } from "@apollo/client";
import React from "react";
import bgImg from "../assets/Background.png";

const GET_POKES = gql`
   query GetPokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
         results {
            name
            dreamworld
            artwork
         }
      }
   }
`;
const Banner = () => {
   const { loading, error, data, refetch } = useQuery<any>(GET_POKES, {
      variables: {
         limit: 10,
         offset: 0,
      },
   });

   console.log(data);

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
