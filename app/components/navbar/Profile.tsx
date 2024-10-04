import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SvgCreditCard } from "@/app/ui/svg/creditCard";
import { SvgLock } from "@/app/ui/svg/lock";
import { SvgLogin } from "@/app/ui/svg/login";
import { SvgSetting } from "@/app/ui/svg/settings";
import { SvgUser } from "@/app/ui/svg/User";
import { SvgChevronDown } from "@/app/ui/svg/chevronDown";

export default function Profile(){
    const [showMenu, setShowMenu] = useState(false)
    const closeMenu = () => {
        setShowMenu(false);
    }
    return(
        <div className="size-8 rounded-full bg-[#26A69A] text-white flex items-center justify-center cursor-pointer relative"
            onClick={() => setShowMenu(!showMenu)}
        >
            <span className="text-black font-bold text-center text-lg">D</span>
            <SvgChevronDown className="w-3 absolute left-9 top-3" />
        
            {showMenu && createPortal(<Menu closeMenu={closeMenu} />, document.body)}
        </div>
    )
}

type propsMenu = {
    closeMenu: () => void
}

export const Menu = ({ closeMenu } : propsMenu) => {
    const [url, setUrl] = useState('');
    useEffect(() => {
        setUrl(window.location.hash)
    }, [])
    return(
        <>
            <div className="fixed inset-0" onClick={closeMenu}>
                <div className={`absolute top-20 right-[1vw] text-white w-[200px] h-[254px] bg-[#18181C] rounded-md p-4 space-y-4 shadow shadow-black/25 z-50`}>
                    <Link href='/account#CLIENT-ID' className='flex items-center gap-x-2 text-xs' onClick={() => setUrl('#CLIENT-ID')}>
                        <SvgLock width={24} height={24} stroke={ url == '#CLIENT-ID' ? '#F57F17' : '#ffffff'} />
                        <span>CLIENT ID</span>
                    </Link>
                    <Link href='/account#CardSubscribe' className='flex items-center gap-x-2 text-xs' onClick={() => setUrl('#CardSubscribe')}>
                        <SvgCreditCard width={24} height={24} stroke={ url == '#CardSubscribe' ? '#F57F17' : '#ffffff'} />
                        <span>INFORMATION DE PAIEMENTS</span>
                    </Link>
                    <Link href='/account#CardInfo' className='flex items-center gap-x-2 text-xs' onClick={() => setUrl('#CardInfo')}>
                        <SvgUser width={24} height={24} stroke={ url == '#CardInfo' ? '#F57F17' : '#ffffff'} />
                        <span>INFORMATIONS PERSONNELLES</span>
                    </Link>
                    <Link href='/account#CardAccount' className='flex items-center gap-x-2 text-xs' onClick={() => setUrl('#CardAccount')}>
                        <SvgLogin width={24} height={24} stroke={ url == '#CardAccount' ? '#F57F17' : '#ffffff'} />
                        <span>COMPTE ASSOCIES</span>
                    </Link>
                    <Link href='/account#CardRenew' className='flex items-center gap-x-2 text-xs' onClick={() => setUrl('#CardRenew')}>
                        <SvgSetting width={24} height={24} stroke={ url == '#CardRenew' ? '#F57F17' : '#ffffff'} />
                        <span>PARAMETRES</span>
                    </Link>
                </div>
            </div>
        </>
    )
}