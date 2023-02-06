import { gql, useQuery } from "@apollo/client";

const GET_TYPES = gql`
   query {
      types {
         results {
            name
         }
      }
   }
`;

export const useTypes = () => {
   const { loading, data } = useQuery(GET_TYPES);
   return data?.types?.results.slice(0, 3);
   //   const types = data?.types?.results as any;
};
