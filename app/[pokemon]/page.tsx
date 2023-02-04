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
         className="bg-cover bg-no-repeat bg h-screen w-full"
         style={{ backgroundImage: `url(${bgImage.src})` }}
      >
         <Logo />

         <aside>
            <p className="lg:text-5xl font-medium text-blue-600 capitalize">
               {data?.pokemon?.name} #{data?.pokemon?.id.toString().padStart(3, "0")}
            </p>
         </aside>
         <div></div>
         <aside></aside>
      </section>
   );
};

export default Page;
