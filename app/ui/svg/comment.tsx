import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgComment: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.3644C0 0.887011 0.377759 0.5 0.84375 0.5H17.1562C17.6222 0.5 18 0.887011 18 1.3644V13.4661C18 13.9434 17.6222 14.3305 17.1562 14.3305H14.3438V16.6355C14.3438 16.9412 14.1862 17.224 13.9294 17.3796C13.6727 17.5352 13.3548 17.5403 13.0934 17.393L7.65828 14.3305H0.84375C0.377759 14.3305 0 13.9434 0 13.4661V1.3644ZM1.6875 2.22881V12.6017H7.875H8.09172L8.28162 12.7086L12.6562 15.1736V13.4661V12.6017H13.5H16.3125V2.22881H1.6875ZM6.75 6.83897H3.375V5.11016H6.75V6.83897ZM14.625 7.9915H11.25V9.72031H14.625V7.9915ZM3.375 9.72031V7.9915H10.125V9.72031H3.375ZM14.625 5.11016H7.875V6.83897H14.625V5.11016Z" fill="white" fill-opacity="0.85"/>
            </svg> 
        </div>       
    )
}

