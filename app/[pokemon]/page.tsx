"use client";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { useTypes } from "@/extraQuery/getTypes";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import bgImage from "../../assets/BG.png";

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
   console.log(data?.pokemon);
   const singlePokemon = data?.pokemon as PokemonType;
   const weakness = useTypes(singlePokemon?.types);
   //    console.log(result);

   return (
      <section
         className="bg-cover bg-no-repeat h-screen w-full"
         style={{ backgroundImage: `url(${bgImage.src})` }}
      >
         <Logo />

         <section className="mx-60 mt-20 grid grid-cols-3 place-items-center gap-20">
            <aside className="col-span-1">
               <p className="lg:text-5xl mb-4 font-medium text-blue-600 capitalize">
                  {singlePokemon?.name} #{singlePokemon?.id.toString().padStart(3, "0")}
               </p>

               <p className="lg:text-xl">
                  There is a plant seed on its back right from the day this Pokémon is
                  born. The seed slowly grows larger.
               </p>

               <div className="rounded-lg p-1 mt-10 gradient polygon-clip">
                  <div className="grid grid-cols-2 gap-10 bg-white rounded-lg p-10 polygon-clip">
                     {/*  */}
                     <div className="space-y-3">
                        <p className="text-xl font-medium">Height</p>
                        <p className="font-medium">{data?.pokemon?.height}</p>
                     </div>

                     <div className="space-y-3">
                        <p className="text-xl font-medium">Category</p>
                        <p className="font-medium">Seed</p>
                     </div>

                     <div className="space-y-3">
                        <p className="text-xl font-medium">Weight</p>
                        <p className="font-medium">{data?.pokemon?.weight} lbs</p>
                     </div>

                     <div className="space-y-2">
                        <p className="text-xl font-medium">Abilities</p>
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

            <div>
               <Image
                  className="mx-auto w-96 object-cover hover:scale-110 transition-all duration-500"
                  src={data?.pokemon?.sprites?.front_default}
                  width={1000}
                  height={1000}
                  alt=""
               ></Image>
            </div>

            <aside>
               <div className="space-y-4">
                  <p className="text-xl font-semibold">Type</p>
                  <div className="2xl:space-x-5 space-x-3">
                     {singlePokemon?.types?.map((type: any, i: number) => (
                        <Button key={i} type={type?.type} />
                     ))}
                  </div>
               </div>

               <div className="space-y-4 mt-5">
                  <p className="text-xl font-semibold">Weaknesses</p>
                  <div className="2xl:space-x-5 space-x-3">
                     {weakness?.map((data: any) => {
                        console.log(data);
                        return data?.name !== "flying" ? (
                           <button
                              key={data?.name}
                              className={`bg-${data?.name} btn capitalize`}
                           >
                              {data?.name}
                           </button>
                        ) : (
                           <button className={`capitalize two-color button`}>
                              {data?.name}
                           </button>
                        );
                     })}
                  </div>
               </div>

             
            </aside>
         </section>
      </section>
   );
};

export default Page;
