import { ISvgProps } from "@/app/types/svg"
import React from "react"

export const SvgTwitter: React.FC<ISvgProps> = (props) => {
    return(
        <div {...props}>
            <svg width={props.width} height={props.height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7681 8.59531C22.7681 8.83652 22.7681 9.02949 22.7681 9.2707C22.7681 15.9764 17.7027 23.6469 8.39197 23.6469C5.49744 23.6469 2.84412 22.8268 0.624975 21.3795C1.01091 21.4277 1.39685 21.476 1.83103 21.476C4.1949 21.476 6.3658 20.6559 8.10251 19.3051C5.88337 19.2568 4.00193 17.8096 3.37478 15.7834C3.71248 15.8316 4.00193 15.8799 4.33962 15.8799C4.7738 15.8799 5.25623 15.7834 5.64216 15.6869C3.32654 15.2045 1.58982 13.1783 1.58982 10.718V10.6697C2.26521 11.0557 3.08533 11.2486 3.90544 11.2969C2.50642 10.3803 1.63806 8.83652 1.63806 7.0998C1.63806 6.13496 1.87927 5.2666 2.31345 4.54297C4.82205 7.58223 8.58494 9.6084 12.782 9.84961C12.6855 9.46367 12.6373 9.07773 12.6373 8.6918C12.6373 5.89375 14.9047 3.62637 17.7027 3.62637C19.15 3.62637 20.4525 4.20527 21.4174 5.21836C22.5269 4.97715 23.6365 4.54297 24.6013 3.96406C24.2154 5.17012 23.4435 6.13496 22.3822 6.76211C23.3953 6.66562 24.4084 6.37617 25.2767 5.99023C24.6013 7.00332 23.733 7.87168 22.7681 8.59531Z" fill="white"/>
                <a href="https://twitter.com/CinafTv">
                <rect fill="black" fill-opacity="0" x="0.15" y="-1.8525" width="24.7" height="28.405"/>
                </a>
            </svg>  
        </div>      
    )
}
