import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgPlayerPlay: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_329_63)">
                <path d="M20 13.3333V66.6667C19.9998 67.2598 20.1579 67.8422 20.4579 68.3538C20.758 68.8654 21.1891 69.2877 21.7067 69.5771C22.2244 69.8665 22.81 70.0126 23.4029 70.0002C23.9959 69.9878 24.5748 69.8174 25.08 69.5067L68.4133 42.84C68.8987 42.5418 69.2995 42.1241 69.5775 41.627C69.8555 41.1298 70.0015 40.5696 70.0015 40C70.0015 39.4304 69.8555 38.8702 69.5775 38.373C69.2995 37.8759 68.8987 37.4582 68.4133 37.16L25.08 10.4933C24.5748 10.1825 23.9959 10.0122 23.4029 9.99978C22.81 9.98739 22.2244 10.1334 21.7067 10.4229C21.1891 10.7123 20.758 11.1346 20.4579 11.6462C20.1579 12.1578 19.9998 12.7402 20 13.3333Z" fill="#0F171E"/>
                </g>
                <defs>
                <clipPath id="clip0_329_63">
                <rect width="80" height="80" fill="white"/>
                </clipPath>
                </defs>
            </svg> 
        </div>       
    )
}

