"use client";
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

type Params = {
   pokemon: String;
};

const Page = ({ params }: { params: Params }) => {
   const { loading, data, error } = useQuery(GET_POK_DETAILS, {
      variables: {
         name: params.pokemon,
      },
   });
   console.log(data);

   return (
      <section
         className="bg-cover bg-no-repeat bg h-screen w-full"
         style={{ backgroundImage: `url(${bgImage.src})` }}
      >
         <h1>Hello</h1>
      </section>
   );
};

export default Page;
