import React from 'react'
import { SvgTiktok } from '../ui/svg/tiktok'
import { SvgLinkedin } from '../ui/svg/linkedin'
import { SvgTwitter } from '../ui/svg/twitter'
import { SvgYoutube } from '../ui/svg/youtube'
import { SvgFacebook } from '../ui/svg/facebook'
import { SvgApple } from '../ui/svg/apple'
import { SvgSms } from '../ui/svg/sms'
import { SvgInstagram } from '../ui/svg/instagram'
import Image from 'next/image'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='w-full mt-20 flex items-center justify-center'>
        <div className='w-[80%] space-y-6 self-center'>
            <div className='w-full text-white/60 text-xs flex items-center justify-between'>
                <a href="#" className='w-full flex items-center'>FAQ</a>
                <a href="#" className='w-full flex items-center'>Blog</a>
                <a href="#" className='w-full flex items-center'>Politique de confidentialite</a>
            </div>
            <div className='w-full text-white/60 text-xs flex items-center justify-between'>
                <a href="#" className='w-full flex items-center'>Diffuser son contenu sur Cinaf</a>
                <a href="#" className='w-full flex items-center'>A propos</a>
                <a href="#" className='w-full flex items-center'>Affiliation</a>
            </div>
            <div className='w-full flex items-center justify-between'>
                <div className='w-full flex space-x-4'>
                    <a href="#">
                        <SvgTiktok width={20} height={20} />
                    </a>
                    <a href="#">
                        <SvgInstagram width={20} height={20} />
                    </a>
                    <a href="#">
                        <SvgLinkedin width={20} height={20} />
                    </a>
                    <a href="#">
                        <SvgTwitter width={20} height={20} />
                    </a>
                    <a href="#">
                        <SvgYoutube width={20} height={20} />
                    </a>
                    <a href="#">
                        <SvgFacebook width={20} height={20} />
                    </a>                    
                </div>
                <div className='w-full flex items-center space-x-4'>
                    <a href="#">
                        <div className='size-8'>
                            <Image 
                                src='/ressources/apple.png' 
                                alt='Apple' 
                                width={1000} 
                                height={1000}
                                className='w-full h-full object-contain'
                            />
                        </div>
                    </a>
                    <a href="#">
                        <div className='size-8'>
                            <Image 
                                src='/ressources/playstore.png' 
                                alt='Playstore' 
                                width={1000} 
                                height={1000}
                                className='w-full h-full object-contain'
                             />
                        </div>
                    </a>
                </div>
                <div className='w-full text-black'>
                    <a href="#" className='w-fit p-2 bg-white rounded-full text-xs font-bold flex space-x-2'>
                        <SvgSms width={20} height={20} /> 
                        <span>Contactez nous</span>
                    </a>
                </div>
            </div>
            <div className='text-white/60 text-xs'>&copy; 2018-2023 CINAF TV.</div>
        </div>
    </div>
  )
}