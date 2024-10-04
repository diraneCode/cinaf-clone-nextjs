import React from 'react'
import Image from 'next/image'
import { SvgPlayerWhite } from '@/app/ui/svg/player-white'
import { SvgUpload } from '@/app/ui/svg/upload'
import { SvgvolumeDown } from '@/app/ui/svg/volumeDown'
import { SvgchevronUp } from '@/app/ui/svg/chevronUp'
import { SvgBtnDown } from '@/app/ui/svg/chevronDown2'

export default function VideoPlay() {
  return (
    <div className="w-2/3 h-full flex items-center justify-center relative">
      <div className="w-2/4 h-full flex rounded-xl relative overflow-hidden">
        <Image
          src="/ressources/teasers/teaser3.webp"
          alt="MovieItem.png"
          width={1000}
          height={1000}
          className='w-full h-full bg-cover'
        />
        <button type="button" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <SvgPlayerWhite width={70} height={70} />
        </button>
        <progress className="progress progress-error h-1 absolute bottom-0" value="60" max="100"></progress>
      </div>
      <div className="h-2/3 self-end absolute right-5 flex flex-col justify-between">
        <div className="flex flex-col space-y-6 self-end">
          <button type="button" className="size-7 rounded-full bg-white/10 flex items-center justify-center">
            <SvgchevronUp width={12} height={12} />
          </button>
          <button type="button" className="size-7 rounded-full bg-white/10 flex items-center justify-center">
            <SvgBtnDown width={12} height={12} />
          </button>
        </div>
        <div className="flex space-x-4 mb-5">
          <button type="button" className="size-7 rounded-full bg-white/10 flex items-center justify-center">
            <SvgvolumeDown width={16} height={16} />
          </button>
          <button type="button" className="size-7 rounded-full bg-white/10 flex items-center justify-center">
            <SvgUpload width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  )
}