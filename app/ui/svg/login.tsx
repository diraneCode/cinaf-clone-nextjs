import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgLogin: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_228_1236)">
                <path d="M18.0833 10.3333V7.74999C18.0833 7.06485 17.8112 6.40777 17.3267 5.9233C16.8422 5.43883 16.1851 5.16666 15.5 5.16666H6.45833C5.77319 5.16666 5.11611 5.43883 4.63164 5.9233C4.14717 6.40777 3.875 7.06485 3.875 7.74999V23.25C3.875 23.9351 4.14717 24.5922 4.63164 25.0767C5.11611 25.5612 5.77319 25.8333 6.45833 25.8333H15.5C16.1851 25.8333 16.8422 25.5612 17.3267 25.0767C17.8112 24.5922 18.0833 23.9351 18.0833 23.25V20.6667" stroke={props.stroke} stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25.8337 15.5H9.04199M9.04199 15.5L12.917 11.625M9.04199 15.5L12.917 19.375" stroke={props.stroke} stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_228_1236">
                <rect width="31" height="31" fill="white"/>
                </clipPath>
                </defs>
            </svg> 
        </div>       
    )
}
