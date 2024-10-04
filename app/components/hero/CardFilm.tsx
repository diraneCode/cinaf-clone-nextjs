"use client";

import { movie } from "@/app/types/movie";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import BtnPlay from "./CardFilm/BtnPlay";
import BtnDetail from "./CardFilm/BtnDetail";
import BtnModalDetail from "./CardFilm/BtnModalDetail";
import CardDescription from "./CardFilm/CardDescription";

type ChangeEvent = React.MouseEventHandler<HTMLDivElement>;

export default function CardFilm({ title, image, timeoutRef }: movie) {
  const [active, setActive] = useState(false);
  const [remove, setRemove] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const onMouseEnter: ChangeEvent  = (e) => {
    clearInterval(timeoutRef.current);
    setTimeout(() => {
      setActive(true);
      setRemove(false);
    }, 1000);
  };
  const onMouseLeave: ChangeEvent  = (e) => {
    setActive(false);
    console.log(e);
  };
  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-[100%] h-[100%] relative"
    >
      
        <Link href={`/player`} className="block z-[1] w-full h-full rounded">
          <Image
            src={image}
            alt={image}
            width={1000}
            height={200}
            className="w-full h-full rounded object-cover"
          />
        </Link>
        {!remove && (
          <div 
            ref={ref}
            className="bg-[#262626] rounded-md overflow-hidden z-[2] absolute shadow-[0px_5px_15px_rgba(0,0,0,0.07)]"
            style={{
              top: 0,
              left: 0,
              animationName: active ? "card" : "card-exit",
              animationDuration: "0.6s",
              animationFillMode: "forwards",
              animationTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
            }}
            onAnimationEnd={(e) => {
              if (e.animationName === "card-exit") {
                setRemove(true);
              }
            }}
          >
            <div>
              <div className="w-[300px] h-[160px]">
                <Link href={`/player`} className="block z-[1] w-full h-full rounded">
                  <Image
                    src={image}
                    alt={image}
                    width={1000}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              <div className="p-2">
                <div 
                  className="w-full flex items-center justify-between space-y-2"
                  style={{
                    animationName: active ? "card-cont-enter" : "card-cont-exit",
                    animationDuration: "0.5s",
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="flex space-x-3">
                    <BtnPlay />
                    <BtnDetail />
                  </div>
                  <BtnModalDetail />
                </div>
                <CardDescription />
              </div>
            </div>
        </div>)}
    </div>
  );
}
