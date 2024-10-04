'use client'

import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { SvgAD } from "@/app/ui/svg/ad"
import { SvgHD } from "@/app/ui/svg/hd"
import { SvgComment } from "@/app/ui/svg/comment"
import { SvgAdd } from "@/app/ui/svg/add"
import { SvgShare } from "@/app/ui/svg/share"
import { SvgVolumeMute } from "@/app/ui/svg/volumeMute"
import { SvgPlayerPlay } from "@/app/ui/svg/playerPlay"

export default function HeroDetail() {
  const pathname = usePathname();

  return (
    <div className="w-1/3 h-[65vh] flex flex-col justify-between space-y-2 mt-20 ">
          {
            pathname == "/" ? null : 
            <div className="flex items-center space-x-7 ">
              <label htmlFor="serie" className="text-2xl text-white font-bold">{pathname == "/movies" ? "Films" : "Serie"}</label>
              <select id="serie" className="bg-black/80 py-1 px-3 border border-[#f2f2f2]/70 font-bold text-white">
                <option value="">Genre</option>
              </select>
            </div>
          }
          <div className="w-[250px] h-[150px]">
            <Image
              src="/ressources/samba.png"
              alt="samba"
              width={1000}
              height={1000}
              className="w-full h-full -ml-3"
            />
          </div>
          <div className="h-fit flex flex-col space-y-3">
            <div className="flex space-x-2">
              <span className="text-white">50 min</span>
              <span className="text-white">2021</span>
              <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs text-center">16+</span>
              </div>
              <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs text-center">5.1</span>
              </div>
              <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
                <SvgAD width={25} height={25} />
              </div>
              <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
                <SvgHD width={25} height={25} />
              </div>
              <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
                <SvgComment width={18} height={18} />
              </div>
            </div>
            <div className="text-white text-[20px] shadow">
              Minga, jeune orpheline vit chez sa marâtre Mami Kaba, une femme
              acariâtre qui n’hésite pas à lui mener la vie dure et la mettra hors
              de chez elle pour une cuillère...
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-xs text-gray-300">Drame . Anime</span>
            </div>
            <div className="w-screen pr-20 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link href={`/player`} className="size-20 rounded-full bg-[#f2f2f2] flex items-center justify-center">
                  <SvgPlayerPlay width={60} height={60} />
                </Link>
                <div className="flex items-center justify-between space-x-10">
                  <div className="text-white text-2xl">
                    Lecture
                  </div>
                  <div className="space-x-8 flex items-center justify-center">
                    <SvgAdd width={20} height={20} className="cursor-pointer" />
                    <SvgShare width={25} height={25} className="cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button type="button" className="size-8 rounded-full border boder-white flex items-center justify-center">
                  <SvgVolumeMute width={25} height={25} />
                </button>
                <div
                  className="w-20 h-8 bg-black/40 border-l-2 
                  border-white flex items-center justify-center text-white"
                >
                  <span>13+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}