import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgBtnDown: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 2.125L10.5 10.875L19.25 2.125" stroke="#F2F2F2" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}