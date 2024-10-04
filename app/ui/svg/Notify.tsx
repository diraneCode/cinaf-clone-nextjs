import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgNotify: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 16.0294C8.5 19.0294 10.5 19.5294 12 16.0294H7Z" stroke="#F2F2F2" stroke-width="2"/>
                <path d="M3.58359 10.0974C3.18359 3.69735 7.08359 1.76402 9.08359 1.59735C13.8836 0.797351 15.4169 7.26402 15.5836 10.5974C17.1836 11.3974 18.5836 15.5973 17.0836 15.0973L3.08359 15.5974C-0.916408 15.9973 1.75026 12.0974 3.58359 10.0974Z" stroke="#F2F2F2" stroke-width="2"/>
            </svg> 
        </div>       
    )
}

