import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgchevronUp: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.25 10.875L10.5 2.125L1.75 10.875" stroke="#F2F2F2" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}