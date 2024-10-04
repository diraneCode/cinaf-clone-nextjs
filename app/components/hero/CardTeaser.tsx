import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    image?: string
    title?: string
    date?: string 
}

export default function CardTeaser({image, title, date}: Props) {
  return (
    <Link href='/teasers' className='block w-[210px] space-y-2 overflow-hidden'>
        <div className="w-[210px] h-[370px] bg-[#262626] rounded overflow-hidden">
            {image ? <Image src={image} alt={image} width={1000} height={100} /> : null}
        </div>
        {
            title ? <div className="w-[208px] h-[43px] p-2 bg-[#262626] rounded text-white text-xs">{title}</div> : 
            <div className="w-[208px] h-[43px] bg-[#262626] rounded"></div>
        }
        {
            date ? <div className="w-fit py-1 px-2 bg-[#262626] rounded text-center text-xs text-white">{date}</div> :
            <div className="w-fit py-1 px-2 bg-[#262626] rounded"></div>
        }
    </Link>
  )
}