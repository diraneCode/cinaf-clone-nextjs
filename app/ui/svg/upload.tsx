import { Tsvg } from "@/app/types/svg"
import React, { HTMLAttributes } from "react"

interface SvgProps extends HTMLAttributes<HTMLDivElement>{
    height: number,
    width: number
}

export const SvgUpload: React.FC<SvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.83325 12V20C1.83325 20.5304 2.14054 21.0391 2.68752 21.4142C3.2345 21.7893 3.97637 22 4.74992 22H22.2499C23.0235 22 23.7653 21.7893 24.3123 21.4142C24.8593 21.0391 25.1666 20.5304 25.1666 20V12M19.3333 6L13.4999 2M13.4999 2L7.66658 6M13.4999 2V15" stroke="#F2F2F2" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}
