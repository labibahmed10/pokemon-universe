"use client";
import Logo from "@/components/Logo";
import { gql, useQuery } from "@apollo/client";
import { type } from "os";
import bgImage from "../../assets/BG.png";

const GET_POK_DETAILS = gql`
   query ($name: String!) {
      pokemon(name: $name) {
         id
         height
         weight
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
   id: number;
   height: number;
   weight: number;
   abilities: any;
   types: any;
   name: string;
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

   return (
      <section
         className="bg-cover bg-no-repeat h-screen w-full"
         style={{ backgroundImage: `url(${bgImage.src})` }}
      >
         <Logo />

         <section className="mx-60 mt-20 grid grid-cols-3 gap-20">
            <aside className="col-span-1">
               <p className="lg:text-5xl mb-4 font-medium text-blue-600 capitalize">
                  {data?.pokemon?.name} #{data?.pokemon?.id.toString().padStart(3, "0")}
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
                           {data?.pokemon?.abilities?.map((ability: any) => (
                              <p className="capitalize" key={ability?.slot}>
                                 {ability.ability.name}
                              </p>
                           ))}
                        </p>
                     </div>
                  </div>
               </div>
            </aside>

            <div>
                
            </div>
            <aside></aside>
         </section>
      </section>
   );
};

export default Page;
