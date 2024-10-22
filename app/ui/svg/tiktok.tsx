import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgTiktok: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.8112 11.3934H23.763C21.5438 11.3934 19.5176 10.718 17.8774 9.51191V18.1473C17.8774 22.4891 14.3557 25.9625 10.0139 25.9625C5.67213 25.9625 2.19869 22.4891 2.19869 18.1473C2.19869 13.8055 5.67213 10.2838 10.0139 10.2838C10.3999 10.2838 10.7376 10.332 11.1235 10.3803V14.7221C10.7376 14.5773 10.3999 14.5291 10.0139 14.5291C8.036 14.5291 6.39576 16.1693 6.39576 18.1473C6.39576 20.1252 8.036 21.7654 10.0139 21.7654C11.9919 21.7654 13.6321 20.1252 13.6321 18.1473V1.2625H17.8774C17.8774 1.31074 17.8774 1.31074 17.8774 1.35898C17.8774 1.69668 17.8774 2.03437 17.9739 2.37207C18.2633 3.96406 19.2282 5.36309 20.579 6.23144C21.4956 6.85859 22.6051 7.19629 23.763 7.19629C23.763 7.19629 23.763 7.19629 23.8112 7.19629V11.3934Z" fill="white"/>
                <a href="https://www.tiktok.com/@cinaf.tv">
                <rect fill="black" fill-opacity="0" x="0.193749" y="-1.8525" width="21.6125" height="28.405"/>
                </a>
            </svg>
        </div>        
    )
}

