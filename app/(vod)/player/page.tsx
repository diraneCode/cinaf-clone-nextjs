import Image from "next/image";

export default function Player(){
    return(
        <div className="w-screen h-screen flex items-center justify-center relative">
            <Image src="/ressources/home.png" alt="movie" width={1000} height={100}
            className="w-full h-full absolute"
            />
            <div className="absolute top-20 left-10 flex flex-col">
                <span className="text-white">Minga et la Cuillere cassé</span>
                <span className="text-white font-bold">E2 “Episode 2”</span>
                <div className="w-full h-full bg-black/20 absolute backdrop-blur-md -z-10">

                </div>
            </div>
            <div className="w-24 loading loading-spinner text-error"></div>
        </div>
    );
}