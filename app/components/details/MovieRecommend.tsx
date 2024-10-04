import { SvgAD } from "@/app/ui/svg/ad";
import { SvgHD } from "@/app/ui/svg/hd";
import Image from "next/image";

export default function MovieRecommend(){
    return(
        <div className="w-[261px] h-[357px] bg-[#1E1E1E] rounded-md overflow-hidden space-y-5">
            <div className="w-full h-2/5 bg-[#262626]">
                <Image 
                    src='/ressources/rem1.png' 
                    alt='rem' 
                    width={1000} 
                    height={100}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex justify-between px-4">
                <div className="w-fit px-5 bg-[#262626] rounded">
                    <SvgAD width={30} height={30} />
                </div>
                <div className="w-fit px-5 bg-[#262626] rounded">
                    <SvgHD width={30} height={30} />
                </div>
                <div className="w-fit px-5 bg-[#262626] rounded">
                    <SvgHD width={30} height={30} />
                </div>
            </div>
            <div className="px-4 text-xs text-[#F2F2F2]/80">
                Filomena décide de se rendre à Douala pour y créer son entreprise. Elle ne connaît personne d`autre que l`adresse de son amie, Rosa. Rosa est surprise par sa présence, mais elle n`a pas le choix, Filomena n`a pas d`autre endroit où aller. Filo discute avec le propriétaire et ils arrivent à un 
            </div>
        </div>
    );
}