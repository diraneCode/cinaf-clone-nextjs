import { HTMLAttributes } from "react"


export interface ISvgProps extends HTMLAttributes<HTMLDivElement>{
    width: number
    height: number
    color?: string
    fill?: string
    stroke?: string
}