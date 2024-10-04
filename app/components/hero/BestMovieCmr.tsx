import React, { useRef } from "react";
import CardFilm from "./CardFilm";
import { movieList } from "@/app/lib/data-movie";

// Swiper components, modules and styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {};

export default function BestMovieCmr({}: Props) {
  const timeoutRef = useRef(0);
  return (
    <div>
      <span className="text-white text-xl block mb-2">
        Meilleurs Films Camerounais
      </span>
      <Swiper 
        navigation
        modules={[Navigation]} 
        spaceBetween={5}
        slidesPerView={4.6}   
        slidesPerGroup={4}  
        className="flex flex-col-reverse gap-y-4 gap-x-3"
        style={{overflow: 'visible'}}
      >
        {movieList.map((movie, key) => (
          <SwiperSlide  key={key}>
            <CardFilm 
              timeoutRef={timeoutRef}
              image={movie.image}
              title={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
