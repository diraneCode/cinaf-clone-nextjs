import React, { HTMLAttributes } from "react"

interface SvgProps extends HTMLAttributes<HTMLDivElement>{}

export const SvgBonus: React.FC<SvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5_1170)">
                <path d="M12 6.51176C8.78148 6.70586 6.20586 9.28148 6.01176 12.5H5.98825C5.79412 9.28148 3.21855 6.70586 0 6.51176V6.48826C3.21855 6.29413 5.79412 3.71854 5.98825 0.5H6.01176C6.20586 3.71854 8.78148 6.29413 12 6.48826V6.51176Z" fill="url(#paint0_radial_5_1170)"/>
                </g>
                <defs>
                <radialGradient id="paint0_radial_5_1170" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.68236 6.48496) scale(12.976 103.564)">
                <stop offset="0.385135" stop-color="#9E72BA"/>
                <stop offset="0.734299" stop-color="#D65C67"/>
                <stop offset="0.931035" stop-color="#D6635C"/>
                </radialGradient>
                <clipPath id="clip0_5_1170">
                <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs>
            </svg>  
        </div>
    )
}

