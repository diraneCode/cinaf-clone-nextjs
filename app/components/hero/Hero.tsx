'use client'

import Image from "next/image"
import { usePathname } from "next/navigation"
import HeroDetail from "./HeroDetail"
import Footer from "../Footer"
import BestMovie from "./BestMovie"
import BestMovieCmr from "./BestMovieCmr"
import MyListe from "./MyListe"
import RecommandationList from "./RecommandationList"
import SeriesList from "./SeriesList"
import TeaserList from "./TeaserList"

export default function Hero() {
  const pathname = usePathname();

  return (
    <div className="w-full z-0 h-fit relative">
      <div className="w-full h-full">
        <div className="w-screen h-screen absolute -z-10">
          <Image
            src="/ressources/home.webp"
            alt="samba"
            width={1000}
            height={1000}
            className="w-full h-[90%] opacity-80 object-cover"
          />
        </div>
        <div className="h-fit py-2 px-4">
          <HeroDetail />
        </div>
      </div>
      <div className="py-2 px-4 flex flex-col">
        <div className="py-2 z-30 relative">
          <div className="space-y-12">
            <RecommandationList />
            <SeriesList />
            <TeaserList />
            <MyListe />
            <BestMovieCmr />
            <BestMovie />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}