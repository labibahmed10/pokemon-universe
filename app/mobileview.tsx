import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "./card";

type Pokemon = {
   id: Number;
   url: String;
   name: String;
   dreamworld: String;
};

const MobileView = ({ results }: { results: any }) => {
   return (
      <>
         <Swiper
            navigation={true}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={15}
            centeredSlides={true}
            className="w-80 mt-8 mb-5"
         >
            {results?.map((pokemon: Pokemon, i: number) => (
               <SwiperSlide key={i} className="w-full">
                  <Card pokemon={pokemon} />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
};

export default MobileView;
