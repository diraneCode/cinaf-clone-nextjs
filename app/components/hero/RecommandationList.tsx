import React, { useRef } from "react";
import CardFilm from "./CardFilm";
import { movieList } from "@/app/lib/data-movie";

// Swiper components, modules and styles
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RecommandationList() {
  const timeoutRef = useRef(0);
  return (
    <div>
      <div className="bg-gradient-to-b from-[#141414]/0 to-[#141414]/80 blur backdrop-blur py-20 w-screen absolute -z-10 top-10 -left-4"></div>
      <span className="text-white text-xl block mb-2">Nos Recommandations</span>
      <Swiper 
        navigation
        modules={[Navigation]} 
        spaceBetween={5}
        slidesPerView={4.6}   
        slidesPerGroup={4}  
        className="flex flex-col-reverse gap-y-4 gap-x-3 -z-10"
        style={{overflow: 'visible'}}
      >
        {movieList.map((movie, key) => (
          <SwiperSlide key={key}>
            <CardFilm 
              image={movie.image}
              title={movie.title}
              timeoutRef={timeoutRef}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
