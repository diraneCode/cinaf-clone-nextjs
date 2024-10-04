import Link from "next/link";
import Image from "next/image";

export default function EpisodeNouveaute(){
    return(
        <div className="space-y-2">
            <div className="w-[300px] h-[70px] bg-[#252525] rounded p-2 flex items-center space-x-2">
              <Image
                src="/ressources/items1.png"
                alt="items"
                width={100}
                height={10}
              />
              <Link href='#' className="text-sm">Victime saison 2</Link>
            </div>
            <div className="w-[300px] h-[70px] rounded p-2 flex items-center space-x-2">
              <Image
                src="/ressources/items2.png"
                alt="items"
                width={100}
                height={10}
              />
              <Link href='#' className="text-sm">Victime saison 2</Link>
            </div>
            <div className="w-[300px] h-[70px] rounded p-2 flex items-center space-x-2">
              <Image
                src="/ressources/items3.png"
                alt="items"
                width={100}
                height={10}
              />
              <Link href='#' className="text-sm">Victime saison 2</Link>
            </div>
            <div className="w-[300px] h-[70px] rounded p-2 flex items-center space-x-2">
              <Image
                src="/ressources/items4.png"
                alt="items"
                width={100}
                height={10}
              />
              <Link href='#' className="text-sm">Victime saison 2</Link>
            </div>
        </div>
    )
}