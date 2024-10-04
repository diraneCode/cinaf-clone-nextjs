import React, { HTMLAttributes } from "react"

interface SvgProps extends HTMLAttributes<HTMLDivElement>{}

export const SvgChevronDown: React.FC<SvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H11L5.83333 6L1 1Z" fill="#F2F2F2" stroke="#F2F2F2" stroke-width="2" stroke-linejoin="round"/>
            </svg>  
        </div>
    )
}

