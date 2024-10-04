'use client'

import Image from "next/image";
import Link from "next/link";
import { navItems } from "../lib/navItem";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ModalLogin from "../ui/ModalLogin";
import InputSearch from "./navbar/search/InputSearch";
import Profile from "./navbar/Profile";
import { SvgNotify } from "../ui/svg/Notify";

export default function Navbar(){      
    const pathname = usePathname()
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSearchModal, setShowSearchModal] = useState(false)

    const modalSerchIsOpen = (value: boolean) => {
        if(value){
            setShowSearchModal(true)
        }else{
            setShowSearchModal(false)
        }
    }

    return(
        <div className={`w-screen ${(pathname == '/account' || pathname == '/nouveautes' || pathname == '/movies' || pathname == '/series') && 'bg-[#18181C]'} ${showSearchModal && 'bg-[#18181C]'} fixed top-0 flex items-center justify-center z-40`}>
            <div className="w-[98%] flex justify-between">
                <ul className="flex flex-row items-center justify-between text-white py-1 px-1 space-x-8">
                    <li className="size-14 bg-white rounded-full overflow-hidden">
                        <Link href='/'>
                            <Image 
                                src='/ressources/logo.png' 
                                alt="logo" 
                                width={1000} 
                                height={1000}
                                className="w-full h-full object-container" 
                            />
                        </Link>
                    </li>
                    {
                        navItems.map((item, key) => (
                            <li key={key} className="text-md flex">
                                <Link href={item.path} className={`${pathname === item.path ? 'font-bold text-red-white' : 'text-gray-300'}`} >{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="flex items-center justify-end mr-10 space-x-7 relative transition-all">
                    <InputSearch modalSerchIsOpen={modalSerchIsOpen} />
                    <SvgNotify width={20} height={20} className="cursor-pointer" />
                    <Profile />
            </ul>
            </div>
            {showLoginModal && createPortal(<ModalLogin closeModal={() => setShowLoginModal(false)} />, document.body)}
        </div>
    );
}