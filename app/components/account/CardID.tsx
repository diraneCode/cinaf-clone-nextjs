
export default function CardID() {
  return (
    <section id="CLIENT-ID" className='w-full flex rounded overflow-hidden'>
        <div className='w-1/3 h-44 bg-[#111114] p-5 flex items-center justify-center'>
            <div className='space-y-4'>
                <span className="text-xl">Client ID</span>
                <p className='text-xs text-gray-400'>
                    Contactez notre support client grâce à votre client ID.
                </p>
            </div>
        </div>
        <div className='w-2/3 h-44 bg-[#18181C] p-5 flex items-center justify-center'>
            <div className='w-10/12 bg-[#1D1D21] px-5 py-1 rounded'>
                <span className='text-xs text-gray-400'>Client ID</span><br />
                <span>35 25 45</span>
            </div>
        </div>
    </section>
  )
}