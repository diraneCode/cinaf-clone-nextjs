

export default function CardRenew() {
  return (
    <section id="CardRenew" className='w-full flex rounded overflow-hidden'>
        <div className='w-1/3 h-44 bg-[#111114] p-5 flex items-center justify-center'>
            <div className='space-y-4'>
                <span>Renouvellement auto</span>
                <p className='text-xs text-gray-400'>
                    Le renouvellement automatique permet de maintenir votre access au service de streaming de cinaf actif.
                </p>
            </div>
        </div>
        <div className='w-2/3 h-44 bg-[#18181C] p-5 flex items-center justify-center'>
            <button type="button" className='w-10/12 bg-[#DB5965] p-3 rounded-md text-black font-bold text-md'>
                Suspendre le renouvellement
            </button>
        </div>
    </section>
  )
}