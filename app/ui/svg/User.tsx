import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgUser: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.8337 27.125V24.5417C25.8337 23.1714 25.2893 21.8572 24.3204 20.8883C23.3514 19.9193 22.0373 19.375 20.667 19.375H10.3337C8.96337 19.375 7.64921 19.9193 6.68027 20.8883C5.71134 21.8572 5.16699 23.1714 5.16699 24.5417V27.125M20.667 9.04167C20.667 11.8951 18.3538 14.2083 15.5003 14.2083C12.6469 14.2083 10.3337 11.8951 10.3337 9.04167C10.3337 6.1882 12.6469 3.875 15.5003 3.875C18.3538 3.875 20.667 6.1882 20.667 9.04167Z" stroke={props.stroke} stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  
        </div>      
    )
}

