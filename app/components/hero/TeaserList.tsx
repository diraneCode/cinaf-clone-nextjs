import React from "react";
import CardTeaser from "./CardTeaser";
import { teaserList } from "@/app/lib/data-movie";

// Swiper components, modules and styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {};

export default function TeaserList({}: Props) {
  return (
    <div>
      <span className="text-white text-xl block mb-2">Teasers</span>
      <Swiper 
        className="flex flex-col-reverse gap-y-4 gap-x-3"
        navigation
        modules={[Autoplay, Navigation]} 
        spaceBetween={5}
        slidesPerView={6}     
      >
        {teaserList.map((movie, key) => (
          <SwiperSlide key={key}>
            <CardTeaser
              image={movie.image}
              title={movie.title}
              date={movie.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
