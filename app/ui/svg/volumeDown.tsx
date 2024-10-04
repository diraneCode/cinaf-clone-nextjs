import React, { HTMLAttributes } from "react"

interface SvgProps extends HTMLAttributes<HTMLDivElement>{
    height: number,
    width: number
}

export const SvgvolumeDown: React.FC<SvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3054 7.33734C22.6724 8.70473 23.4403 10.5591 23.4403 12.4925C23.4403 14.426 22.6724 16.2804 21.3054 17.6478M14.6846 2.2915L7.3929 8.12484H1.55957V16.8748H7.3929L14.6846 22.7082V2.2915Z" stroke="#F2F2F2" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}
