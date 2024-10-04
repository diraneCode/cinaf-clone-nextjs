import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgFacebook: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.919 13.6125C24.919 19.5945 20.529 24.5635 14.7882 25.4318V17.0859H17.5862L18.1169 13.6125H14.7882V11.3934C14.7882 10.4285 15.2706 9.51191 16.7661 9.51191H18.2616V6.56914C18.2616 6.56914 16.9108 6.32793 15.56 6.32793C12.8585 6.32793 11.0735 8.01641 11.0735 11.0074V13.6125H8.03425V17.0859H11.0735V25.4318C5.33269 24.5635 0.990893 19.5945 0.990893 13.6125C0.990893 7.00332 6.34578 1.64844 12.955 1.64844C19.5641 1.64844 24.919 7.00332 24.919 13.6125Z" fill="white"/>
                <a href="https://www.facebook.com/cinaftv">
                <rect fill="black" fill-opacity="0" x="0.15" y="-1.8525" width="24.7" height="28.405"/>
                </a>
            </svg>  
        </div>      
    )
}

