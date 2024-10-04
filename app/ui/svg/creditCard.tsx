import { ISvgProps } from "@/app/types/svg"
import React from "react"


export const SvgCreditCard: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_224_1145)">
                <path d="M1.125 11.25H25.875M3.375 4.5H23.625C24.8676 4.5 25.875 5.50736 25.875 6.75V20.25C25.875 21.4926 24.8676 22.5 23.625 22.5H3.375C2.13236 22.5 1.125 21.4926 1.125 20.25V6.75C1.125 5.50736 2.13236 4.5 3.375 4.5Z" stroke={props.stroke} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_224_1145">
                <rect width="27" height="27" fill="white"/>
                </clipPath>
                </defs>
            </svg> 
        </div>       
    )
}

