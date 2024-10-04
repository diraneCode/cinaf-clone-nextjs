import React from 'react'
import Image from 'next/image'
import AvatarWrapper from '../avatarWrapper';
import { SvgAD } from '@/app/ui/svg/ad';
import { SvgHD } from '@/app/ui/svg/hd';
import { SvgPlus } from '@/app/ui/svg/plus';
import { SvgShare } from '@/app/ui/svg/share';
import { SvgPlayerPlay } from '@/app/ui/svg/playerPlay';

export default function VideoInfo() {
  return (
    <div className="w-1/3 h-full bg-[#2A2A2ACC] p-4 space-y-4 rounded-xl mr-10 z-0">
      <div className="flex flex-row items-center space-x-4">
        <div className="w-56 h-fit">
          <Image
            src="/ressources/teaser-img.png"
            alt="items"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className='w-28 h-fit'>
            <Image
              src="/ressources/victime.png"
              alt="items"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-green-400">Recommmande a 94%</span>
          <div className="flex space-x-2">
            <div className="w-12 h-6 bg-black rounded flex items-center justify-center">
              <span>16+</span>
            </div>
            <div className="w-12 h-6 bg-black rounded flex items-center justify-center">
              <SvgAD width={25} height={25} />
            </div>
            <div className="w-12 h-6 bg-black rounded flex items-center justify-center">
              <SvgHD width={25} height={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="size-10 bg-white rounded-full flex items-center justify-center">
          <SvgPlayerPlay width={27} height={27} />
        </button>
        <span>Lecture</span>
        <SvgPlus width={15} height={15} className="cursor-pointer" />
        <SvgShare width={18} height={18} className="cursor-pointer" />
      </div>
      <div>
        <span className="text-[#f2f2f2]/60">Genre : </span>
        <span>Anime, Comedie, Drame</span>
      </div>
      <div>
        <span>thriller</span>
        <p className="text-sm text-[#f2f2f2]/80 mt-3">
          Minga, jeune orpheline vit chez sa marâtre Mami Kaba, une femme
          acariâtre qui n’hésite pas à lui mener la vie dure et la mettra
          hors de chez elle pour une cuillère...
        </p>
      </div>
      <AvatarWrapper />
    </div>
  )
}