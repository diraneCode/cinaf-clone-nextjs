import { movieList } from "@/app/lib/data-movie";
import CardFilm from "./CardFilm";

// Swiper components, modules and styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

export default function SeriesList() {
  const timeoutRef = useRef(0);
  return (
    <div>
      <span className="text-white text-xl block mb-2">
        Meilleurs Series du moment
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
