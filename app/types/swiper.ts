export interface Slide {
    id: number;
    title: string;
    tagline: string;
    image: string;
    buttons: ButtonProps[];
}
  
export interface ButtonProps {
    id: number;
    text: string;
    link: string;
    type: string;
}
  
export interface DemoSliderProps {
    data: Slide[];
}