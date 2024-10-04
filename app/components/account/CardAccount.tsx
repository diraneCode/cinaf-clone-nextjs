import Image from "next/image";

export default function CardAccount() {
  return (
    <section id="CardAccount" className='w-full flex rounded overflow-hidden'>
        <div className='w-1/3 h-44 bg-[#111114] p-5 flex items-center justify-center'>
            <div className='space-y-4'>
                <span>Comptes associés</span>
                <p className='text-xs text-gray-400'>
                    S’il sont associés, ces comptes permettent d’acceder à votre compte cinaf.
                </p>
            </div>
        </div>
        <div className='w-2/3 h-44 bg-[#18181C] p-5 flex items-center justify-center'>
            <div className='w-full h-fit bg-[#1D1D21] rounded flex items-center gap-x-4 overflow-hidden'>
                <div className='w-20 h-14 bg-gradient-to-tl from-[#ffffff]/90 to-[#f2f2f2]/90 flex items-center justify-center'>
                    <Image 
                        src='/ressources/Logo-google.png' 
                        alt="google" 
                        width={1000} 
                        height={1000} 
                        className="w-full h-full object-contain"
                    />
                </div>
                <span>Google</span>
            </div>
        </div>
    </section>
  )
}