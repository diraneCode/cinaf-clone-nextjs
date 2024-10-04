import { ISvgProps } from "@/app/types/svg";
import React from "react";

export const SvgArrowDown: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 1.375L7.5 7.625L13.75 1.375" stroke="#F2F2F2" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}
