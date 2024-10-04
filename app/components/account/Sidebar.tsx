'use client'

import { cn } from '@/app/lib/utils'
import { SvgCreditCard } from '@/app/ui/svg/creditCard'
import { SvgLock } from '@/app/ui/svg/lock'
import { SvgLogin } from '@/app/ui/svg/login'
import { SvgSetting } from '@/app/ui/svg/settings'
import { SvgUser } from '@/app/ui/svg/User'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Sidebar() {
    const [url, setUrl] = useState('');
    useEffect(() => {
        setUrl(window.location.hash)
    }, [])
    const u = true;
  return (
    <div className='h-fit mt-20 fixed flex flex-col gap-y-14 text-white self-start left-28'>
        {/* <div className='text-3xl'>
            Gestion du <br /> compte
        </div> */}
        <span className={cn()}>Joker</span>
        <ul className='space-y-4'>
            <Link href='/account#CLIENT-ID' className='flex items-center text-sm gap-x-2' onClick={() => setUrl('#CLIENT-ID')}>
                <SvgLock width={24} height={24} stroke={ url == '#CLIENT-ID' ? '#F57F17' : '#ffffff'} />
                <span>CLIENT ID</span>
            </Link>
            <Link href='/account#CardSubscribe' className='flex items-center text-sm gap-x-2' onClick={() => setUrl('#CardSubscribe')}>
                <SvgCreditCard width={24} height={24} stroke={ url == '#CardSubscribe' ? '#F57F17' : '#ffffff'} />
                <span>INFORMATION DE PAIEMENTS</span>
            </Link>
            <Link href='/account#CardInfo' className='flex items-center text-sm gap-x-2' onClick={() => setUrl('#CardInfo')}>
                <SvgUser width={24} height={24} stroke={ url == '#CardInfo' ? '#F57F17' : '#ffffff'} />
                <span>INFORMATIONS PERSONNELLES</span>
            </Link>
            <Link href='/account#CardAccount' className='flex items-center text-sm gap-x-2' onClick={() => setUrl('#CardAccount')}>
                <SvgLogin width={24} height={24} stroke={ url == '#CardAccount' ? '#F57F17' : '#ffffff'} />
                <span>COMPTE ASSOCIES</span>
            </Link>
            <Link href='/account#CardRenew' className='flex items-center text-sm gap-x-2' onClick={() => setUrl('#CardRenew')}>
                <SvgSetting width={24} height={24} stroke={ url == '#CardRenew' ? '#F57F17' : '#ffffff'} />
                <span>PARAMETRES</span>
            </Link>
        </ul>
    </div>
  )
}