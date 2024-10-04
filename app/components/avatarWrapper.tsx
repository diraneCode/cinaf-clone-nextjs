import Image from "next/image";

export default function AvatarWrapper(){
    return(
        <div className="flex flex-nowrap">
            <div className="size-12 rounded-full bg-[#1E1E1E] border border-black/40 -mr-5 overflow-hidden">
                <Image src='/ressources/actors/actor1.png' alt="Actor" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
            <div className="size-12 rounded-full bg-[#1E1E1E] border border-black/40 -mr-5 overflow-hidden">
                <Image src='/ressources/actors/actor2.png' alt="Actor" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
            <div className="size-12 rounded-full bg-[#1E1E1E] border border-black/40 -mr-5 overflow-hidden">
                <Image src='/ressources/actors/actor3.webp' alt="Actor" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
            <div className="size-12 rounded-full bg-[#1E1E1E] border border-black/40 -mr-5 overflow-hidden">
                <Image src='/ressources/actors/actor4.webp' alt="Actor" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
            <div className="size-12 rounded-full bg-[#1E1E1E] border border-black/40 -mr-5 overflow-hidden">
                <Image src='/ressources/actors/actor5.webp' alt="Actor" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
            <div className="size-12 rounded-full bg-[#1E1E1E] border border-black/40 -mr-5 overflow-hidden">
                <Image src='/ressources/actors/actor6.webp' alt="Actor" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
            <div className="size-12 rounded-full bg-[#1E1E1E] border border-black/40 -mr-5 overflow-hidden">
                <Image src='/ressources/actors/actor7.webp' alt="Actor" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
            <div className="size-12 rounded-full bg-[#1E1E1E] border border-black/40 -mr-5 overflow-hidden">
                <Image src='/ressources/actors/actor8.webp' alt="Actor" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
        </div>
    );
}