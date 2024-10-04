import { SvgPlayerPlay } from "@/app/ui/svg/playerPlay";
import Link from "next/link";

export default function BtnPlay(){
    return(
        <Link
        href={`/player`}
        className="size-8 rounded-full bg-white flex items-center justify-center"
        >
            <SvgPlayerPlay width={22} height={22} />
        </Link>
    )
}