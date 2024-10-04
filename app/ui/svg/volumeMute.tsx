import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgVolumeMute: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_329_73)">
                <path d="M6.25 15.625H4.16667C3.8904 15.625 3.62545 15.5153 3.4301 15.3199C3.23475 15.1246 3.125 14.8596 3.125 14.5833V10.4167C3.125 10.1404 3.23475 9.87546 3.4301 9.68011C3.62545 9.48476 3.8904 9.37501 4.16667 9.37501H6.25L9.89583 4.68751C9.98688 4.51067 10.1382 4.37222 10.3224 4.29719C10.5066 4.22216 10.7116 4.21549 10.9003 4.27839C11.089 4.34129 11.2489 4.46961 11.3513 4.64016C11.4536 4.81071 11.4916 5.01224 11.4583 5.20835V19.7917C11.4916 19.9878 11.4536 20.1893 11.3513 20.3599C11.2489 20.5304 11.089 20.6587 10.9003 20.7216C10.7116 20.7845 10.5066 20.7779 10.3224 20.7028C10.1382 20.6278 9.98688 20.4894 9.89583 20.3125L6.25 15.625Z" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.6667 10.4167L20.8334 14.5833M20.8334 10.4167L16.6667 14.5833" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_329_73">
                <rect width="25" height="25" fill="white"/>
                </clipPath>
                </defs>
            </svg>  
        </div>      
    )
}

