import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgInfo: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_227_1153)">
                <path d="M4.99967 6.66665V4.99998M4.99967 3.33331H5.00384M9.16634 4.99998C9.16634 7.30117 7.30086 9.16665 4.99967 9.16665C2.69849 9.16665 0.833008 7.30117 0.833008 4.99998C0.833008 2.69879 2.69849 0.833313 4.99967 0.833313C7.30086 0.833313 9.16634 2.69879 9.16634 4.99998Z" stroke="#1E1E1E" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_227_1153">
                <rect width="10" height="10" fill="white"/>
                </clipPath>
                </defs>
            </svg>  
        </div>      
    )
}

