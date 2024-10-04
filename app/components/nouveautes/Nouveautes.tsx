import { SvgPlayerPlay } from "@/app/ui/svg/playerPlay";
import { SvgPlus } from "@/app/ui/svg/plus";
import { SvgShare } from "@/app/ui/svg/share";
import Image from "next/image";

export default function Nouveautes(){
    return(
        <div className="w-full h-full rounded-2xl relative overflow-hidden z-0">
            <Image
              src="/ressources/cover1.png"
              alt="v"
              width={1000}
              height={100}
              className="w-full h-full absolute -z-10 object-cover"
            />
            <div className="w-1/2 h-full  px-10 flex flex-col justify-end pb-16 relative">
                <div className="w-full h-full bg-gradient-to-l from-[#ffffff]/0 to-[#000000]/60 absolute top-0 left-0 blur -z-10"></div>
                <div className="space-y-10">
                    <div className="w-56 h-fit">
                        <Image
                            src="/ressources/victime.png"
                            alt="v"
                            width={1000}
                            height={100}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="space-y-10">
                        <div className="flex flex-col space-y-4 text-[#F2F2F2]/80">
                            <span className="text-xs">MAINTENANT DISPONIBLE</span>
                            <span className="text-md">Minga, jeune orpheline vit chez sa marâtre Mami Kaba, une femme
                            acariâtre qui n’hésite pas à lui mener.....</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="size-10 bg-white rounded-full flex items-center justify-center">
                                <SvgPlayerPlay width={25} height={25} />
                            </button>
                            <span>Lecture</span>
                            <SvgPlus width={18} height={18} />
                            <SvgShare width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}