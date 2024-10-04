

export default function CardInfo() {
  return (
    <section id="CardInfo" className='w-full flex rounded overflow-hidden'>
        <div className='w-1/3 bg-[#111114] p-5 flex items-start justify-center'>
            <div className='space-y-4'>
                <span className="text-xl">Information personnelles</span>
                <p className='text-xs text-gray-400'>
                Ces informations sont privées et ne seront pas partagées avec les autres utilisateurs. Vous pouvez lire la <a href="#" className="text-[#F57F17] underline">Politique de confidentialité</a> Cinaf à tout moment.
                </p>
            </div>
        </div>
        <div className='w-2/3 h-fit bg-[#18181C] p-5 flex flex-col items-center justify-center'>
            <div className='w-10/12 space-y-4'>
                <div className="w-full bg-[#1D1D21] flex flex-col px-4 py-4 rounded-md space-y-1">
                    <span className="text-xs text-[#f2f2f2]/60">ADRESSE EMAIL</span>
                    <input type="email" placeholder="ADRESSE EMAIL" className="bg-transparent text-lg outline-none" value="idr*******@gm***.com" />
                </div>
                <div className="w-full flex justify-between">
                    <div className="w-[48%] bg-transparent border-2 border-[#1D1D21] flex flex-col px-4 py-4 rounded-md space-y-1">
                        <span className="text-xs text-[#f2f2f2]/60">NOM DE FAMILLE</span>
                        <input type="text" placeholder="NOM DE FAMILLE" className="bg-transparent text-lg outline-none" value="Leutchuadeu" />
                    </div>
                    <div className="w-[48%] bg-transparent border-2 border-[#1D1D21] flex flex-col px-4 py-4 rounded-md space-y-1">
                        <span className="text-xs text-[#f2f2f2]/60">PRENOM</span>
                        <input type="text" placeholder="PRENOM" className="bg-transparent text-lg outline-none" value="idriss" />
                    </div>
                </div>
                <button className="w-full bg-[#1D1D21] rounded-md py-3 text-[#28282D]">Sauvegarder et continuer</button>
            </div>
        </div>
    </section>
  )
}