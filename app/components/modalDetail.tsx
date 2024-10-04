import AvatarWrapper from '@/app/components/avatarWrapper'
import Episode from '@/app/components/details/Episode'
import Image from 'next/image'
import MovieRecommend from './details/MovieRecommend'
import { SvgClose } from '../ui/svg/close'

const ModalDetail = ({ closeModal }:{ closeModal: () => void })  => {
  return (
    <>
      <div className="fixed inset-0 bg-black/80 z-40 no-scrollbar" onClick={closeModal}></div>
      <div className='w-3/5 h-screen overflow-y-scroll scroll-smooth no-scrollbar z-40 bg-[#262626] text-white space-y-4 fixed top-2 left-1/2 -translate-x-1/2'>
        <div className="w-full h-3/5 bg-[#262626]/40 relative rounded-md overflow-hidden">
          <button type="button" className='absolute top-3 right-3 size-10 bg-[#333336] rounded-full flex items-center justify-center'
          onClick={closeModal}
          >
              <SvgClose width={30} height={30} />
          </button>
          <Image src='/ressources/home.webp' alt='cover' width={1000} height={100} className="w-full h-full"
          />
          <div className="bg-gradient-to-b from-[#181818]/0 to-[#181818]/80 shadow-black shadow-2xl blur py-5 w-full absolute bottom-0"></div>
        </div>
        <div className='w-1/2 px-6'>
          <div>
            Minga, jeune orpheline vit chez sa marâtre Mami Kaba, une femme acariâtre qui n’hésite pas à lui mener la vie dure et la mettra hors de chez elle pour une cuillère...
          </div>
          <span>Casting</span>
          <AvatarWrapper />
        </div>
        <div className="bg-[#141414] space-y-4">
          <div className="w-full px-6">
            <div className="flex justify-between mb-8">
              <span>Episodes</span>
              <span>Samba le general</span>
            </div>
            <div className="space-y-2">
              <Episode />
              <Episode />
            </div>
          </div>
          <div className="w-full px-6 space-y-4 pb-10">
            <span>Vous pouvez aimer</span>
            <div className="flex space-x-5">
              <MovieRecommend />
              <MovieRecommend />
              <MovieRecommend />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalDetail