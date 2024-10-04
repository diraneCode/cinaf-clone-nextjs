import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgShare: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_18_5400)">
                <path d="M13 4V8C6.42501 9.028 3.98001 14.788 3.00001 20C2.96301 20.206 8.38401 14.038 13 14V18L21 11L13 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_18_5400">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg> 
        </div>       
    )
}

