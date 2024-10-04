import React from "react";
import Image from "next/image";
import VideoPlay from "@/app/components/teasers/VideoPlay";
import VideoInfo from "@/app/components/teasers/VideoInfo";

type Props = {};

export default function Teasers({}: Props) {
  return (
    <div className="h-screen pt-14 text-white overflow-hidden">
      <div className="w-full h-[95%] flex items-center justify-center">
        <Image
          src="/ressources/teasers/teaser3.webp"
          alt="MovieItem.png"
          width={1000}
          height={100}
          className='w-screen h-screen bg-cover filter blur-3xl absolute top-0 left-0 -z-0'
        />
        <VideoPlay />
        <VideoInfo />
      </div>
    </div>
  );
}
