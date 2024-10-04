import * as Icon from 'react-icons/bi'
import { useState } from "react";
import { createPortal } from "react-dom";
import ModalSearch from "../../../ui/ModalSearch";
import { SvgSearch } from "@/app/ui/svg/Search";

type props = {
    modalSerchIsOpen: (value: boolean) => void
}

export default function InputSearch({ modalSerchIsOpen } : props){
    const [showSearchModal, setShowSearchModal] = useState(false)
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState(false);
    const handleSearch = (e:string) => {
        setSearch(e)
        if(e == ""){
            setShowSearchModal(false);     
            modalSerchIsOpen(false)       
        }else{
            setShowSearchModal(true);
            modalSerchIsOpen(true)
        }
    }
    const closeSearchModal = () => {
        setSearch("");
        setShowSearchModal(false);            
        setSearchInput(false)
        modalSerchIsOpen(false)
    }
    return(
        <>
            {
                !searchInput ? <div className="transition-all duration-300 ease-in-out" onClick={() => setSearchInput(true)}> <SvgSearch width={20} height={20} className="cursor-pointer" /> </div> :
                <div className="flex items-center space-x-2 px-2 border border-[#ffffff]/60 rounded-md transition-all duration-300 slideInRight">
                    <SvgSearch width={20} height={20} className="cursor-pointer" />
                    <input type="text" placeholder="Rechercher..."
                    className="bg-transparent p-2 outline-none text-white"
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    />
                    <div className="transition-all duration-300 ease-in-out" onClick={closeSearchModal}> <Icon.BiX size={20} color="#FFFFFF" className="cursor-pointer" /> </div>
                </div>
            }
            {showSearchModal && createPortal(<ModalSearch isOpen={searchInput} search={search} />, document.body)}
        </>
    );
}