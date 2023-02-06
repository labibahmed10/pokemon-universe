"use client";

import "./globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

const client = new ApolloClient({
   uri: "https://graphql-pokeapi.graphcdn.app/",
   cache: new InMemoryCache(),
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <head />
         <body>
            <ThemeProvider>
               <ApolloProvider client={client}>{children}</ApolloProvider>
            </ThemeProvider>
         </body>
      </html>
   );
}
