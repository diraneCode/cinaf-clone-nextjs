import { SvgPlus } from "@/app/ui/svg/plus";
import Link from "next/link";

export default function BtnDetail(){
    return(
        <Link
            href={`/movies/1`}
            className="size-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
            <SvgPlus width={15} height={15} />
        </Link>
    )
}