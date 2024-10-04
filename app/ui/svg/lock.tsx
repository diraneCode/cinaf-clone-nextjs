import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgLock: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_230_1149)">
                <path d="M6.875 17.875C6.875 17.1457 7.16473 16.4462 7.68046 15.9305C8.19618 15.4147 8.89565 15.125 9.625 15.125H23.375C24.1043 15.125 24.8038 15.4147 25.3195 15.9305C25.8353 16.4462 26.125 17.1457 26.125 17.875V26.125C26.125 26.8543 25.8353 27.5538 25.3195 28.0695C24.8038 28.5853 24.1043 28.875 23.375 28.875H9.625C8.89565 28.875 8.19618 28.5853 7.68046 28.0695C7.16473 27.5538 6.875 26.8543 6.875 26.125V17.875Z" stroke={props.stroke} stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.125 22C15.125 22.3647 15.2699 22.7144 15.5277 22.9723C15.7856 23.2301 16.1353 23.375 16.5 23.375C16.8647 23.375 17.2144 23.2301 17.4723 22.9723C17.7301 22.7144 17.875 22.3647 17.875 22C17.875 21.6353 17.7301 21.2856 17.4723 21.0277C17.2144 20.7699 16.8647 20.625 16.5 20.625C16.1353 20.625 15.7856 20.7699 15.5277 21.0277C15.2699 21.2856 15.125 21.6353 15.125 22Z" stroke={props.stroke} stroke-opacity="0.8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 15.125V9.625C11 8.16631 11.5795 6.76736 12.6109 5.73591C13.6424 4.70446 15.0413 4.125 16.5 4.125C17.9587 4.125 19.3576 4.70446 20.3891 5.73591C21.4205 6.76736 22 8.16631 22 9.625V15.125" stroke={props.stroke} stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_230_1149">
                <rect width="33" height="33" fill="white"/>
                </clipPath>
                </defs>
            </svg>   
        </div>     
    )
}

