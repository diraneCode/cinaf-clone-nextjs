import Image from "next/image";

export default function Episode() {
  return (
    <div className="bg-[#1E1E1E] flex items-center justify-center p-3 rounded">
        <div className="w-[97%]">
            <div className="w-full flex space-x-4">
                <div className="bg-[#262626] w[20%] h-fit rounded-md overflow-hidden">
                    <Image 
                        src='/ressources/movies/film2.webp' 
                        alt="episode" 
                        width={1000} 
                        height={1000} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="">
                    <div className="flex justify-between">
                        <span>Episode 01</span>
                        <span>43 min</span>
                    </div>
                    <div className="text-[#F2F2F2]/80">
                        Ignorant que Trevor a parlé à Jessica, Mike se réjouit quand Harvey lui confie une affaire importante dont l`issue est cruciale pour le cabinet.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}