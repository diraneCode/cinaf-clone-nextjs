import { ISvgProps } from '@/app/types/svg';
import React from 'react';

export const SvgSearch: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_26)">
                <path d="M3 10.5C3 11.4193 3.18106 12.3295 3.53284 13.1788C3.88463 14.0281 4.40024 14.7997 5.05025 15.4497C5.70026 16.0998 6.47194 16.6154 7.32122 16.9672C8.1705 17.3189 9.08075 17.5 10 17.5C10.9193 17.5 11.8295 17.3189 12.6788 16.9672C13.5281 16.6154 14.2997 16.0998 14.9497 15.4497C15.5998 14.7997 16.1154 14.0281 16.4672 13.1788C16.8189 12.3295 17 11.4193 17 10.5C17 9.58075 16.8189 8.6705 16.4672 7.82122C16.1154 6.97194 15.5998 6.20026 14.9497 5.55025C14.2997 4.90024 13.5281 4.38463 12.6788 4.03284C11.8295 3.68106 10.9193 3.5 10 3.5C9.08075 3.5 8.1705 3.68106 7.32122 4.03284C6.47194 4.38463 5.70026 4.90024 5.05025 5.55025C4.40024 6.20026 3.88463 6.97194 3.53284 7.82122C3.18106 8.6705 3 9.58075 3 10.5Z" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 21.5L15 15.5" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_6_26">
                <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs>
            </svg>  
        </div>      
    )
}

