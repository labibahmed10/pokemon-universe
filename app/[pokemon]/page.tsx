"use client";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { useTypes } from "@/extraQuery/getTypes";
import { gql, useQuery } from "@apollo/client";
import { Progress } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import bgImage from "../../assets/back.png";
import home from "../../assets/Vector.png";

const GET_POK_DETAILS = gql`
   query ($name: String!) {
      pokemon(name: $name) {
         id
         height
         weight
         sprites {
            front_default
         }
         abilities {
            ability {
               name
            }
         }
         types {
            type {
               name
            }
         }
         name
         stats {
            base_stat
            stat {
               name
            }
         }
      }
   }
`;

type PokemonType = {
   id: Number;
   height: Number;
   sprites: String;
   weight: Number;
   abilities: any;
   types: any;
   name: String;
   stats: any;
};

type Params = {
   pokemon: String;
};

const Page = ({ params }: { params: Params }) => {
   const { loading, data, error } = useQuery(GET_POK_DETAILS, {
      variables: {
         name: params?.pokemon,
      },
   });

   const singlePokemon = data?.pokemon as PokemonType;
   const weakness = useTypes();

   return (
      <section
         className="bg-cover bg-no-repeat h-1 lg:h-screen w-full"
         style={{ backgroundImage: `url(${bgImage.src})` }}
      >
         <Logo />

         <section className="lg:mx-60 mx-8 mt-10 grid lg:grid-cols-3 grid-cols-1 place-items-center gap-5 lg:gap-20">
            <aside className="order-2 lg:order-1">
               <p className="lg:text-5xl text-xl mb-4 font-semibold text-blue-600 capitalize">
                  {singlePokemon?.name} #{singlePokemon?.id.toString().padStart(3, "0")}
               </p>

               <p className="lg:text-xl font-medium">
                  There is a plant seed on its back right from the day this Pokémon is
                  born. The seed slowly grows larger.
               </p>

               <div className="rounded-lg p-1 mt-10 gradient polygon-clip">
                  <div className="grid grid-cols-2 gap-10 bg-white rounded-lg p-10 polygon-clip">
                     <div className="space-y-3">
                        <p className="text-xl font-semibold">Height</p>
                        <p className="font-medium">{data?.pokemon?.height}</p>
                     </div>

                     <div className="space-y-3">
                        <p className="text-xl font-semibold">Category</p>
                        <p className="font-medium">Seed</p>
                     </div>

                     <div className="space-y-3">
                        <p className="text-xl font-semibold">Weight</p>
                        <p className="font-medium">{data?.pokemon?.weight} lbs</p>
                     </div>

                     <div className="space-y-2">
                        <p className="text-xl font-semibold">Abilities</p>
                        <p className="font-medium">
                           {singlePokemon?.abilities?.map((ability: any, i: number) => (
                              <li className="capitalize list-none" key={i}>
                                 {ability.ability.name}
                              </li>
                           ))}
                        </p>
                     </div>
                  </div>
               </div>
            </aside>

            <div className="order-1 lg:order-2">
               <Image
                  className="mx-auto w-96 object-cover hover:scale-110 transition-all duration-500"
                  src={data?.pokemon?.sprites?.front_default}
                  width={200}
                  height={200}
                  alt=""
               ></Image>
            </div>

            <aside className="w-full lg:p-10 order-3 mt-5 lg:mt-0">
               <div className="space-y-3">
                  <p className="text-xl font-semibold">Type</p>
                  <div className="2xl:space-x-5 space-x-3">
                     {singlePokemon?.types?.map((type: any, i: number) => (
                        <Button key={i} type={type?.type} />
                     ))}
                  </div>
               </div>

               <div className="space-y-3 mt-3">
                  <p className="text-xl font-semibold">Weaknesses</p>
                  <div className="2xl:space-x-5 space-x-2">
                     {weakness?.map((data: any, i: number) =>
                        data?.name !== "flying" ? (
                           <button
                              key={i}
                              className={`bg-${data?.name} button capitalize`}
                           >
                              {data?.name}
                           </button>
                        ) : (
                           <button key={i} className={`capitalize two-color button`}>
                              {data?.name}
                           </button>
                        ),
                     )}
                  </div>
               </div>

               <div className="space-y-3 mt-5">
                  <p className="text-xl font-semibold">Stats</p>

                  <div className="capitalize space-y-3 w-full">
                     {singlePokemon?.stats?.map((stat: any, i: number) => (
                        <div key={i}>
                           <p>{stat?.stat?.name}</p>
                           <Progress
                              className="w-full bg-gray-400 rounded-lg"
                              value={stat?.base_stat}
                           ></Progress>
                        </div>
                     ))}
                  </div>
               </div>
            </aside>
         </section>

         <div className="mx-auto lg:w-72 w-48 text-center py-10 lg:py-0 lg:pt-10">
            <Link
               href={"/"}
               className="bg-primary_yellow flex justify-center gap-4 lg:py-3 py-2 border-primary_blue lg:border-4 border-2"
            >
               <Image src={home} alt="logo image" />
               <p className="lg:text-xl text-sm font-medium text-white">
                  Back to Homepage
               </p>
            </Link>
         </div>
      </section>
   );
};

export default Page;
