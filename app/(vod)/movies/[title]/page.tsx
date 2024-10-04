import AvatarWrapper from '@/app/components/avatarWrapper'
import Episode from '@/app/components/details/Episode'
import MovieRecommend from '@/app/components/details/MovieRecommend'
import Image from 'next/image'

type Props = {
  params: {
    title: string
  }
}

export default function page({ params }: Props) {
  return (
    <div className='w-screen h-fit bg-[#141414] text-white space-y-4'>
      <div className="w-full h-[70vh] bg-[#262626]/40">
        <Image src='/ressources/home.webp' width={1000} height={1000} alt='movie' className='w-full h-full object-cover' />
      </div>
      <div className='w-1/2 px-6'>
        <div>
          Minga, jeune orpheline vit chez sa marâtre Mami Kaba, une femme acariâtre qui n’hésite pas à lui mener la vie dure et la mettra hors de chez elle pour une cuillère...
        </div>
        <span>Casting</span>
        <AvatarWrapper />
      </div>
      <div className="space-y-4">
        <div className="w-[97%] px-6">
          <div className="flex justify-between mb-8">
            <span>Episodes</span>
            <span>Samba le general</span>
          </div>
          <div className="space-y-2">
            <Episode />
            <Episode />
          </div>
        </div>
        <div className="w-[97%] px-6 pb-10 space-y-4">
          <span>Vous pouvez aimer</span>
          <div className="flex space-x-5">
            <MovieRecommend />            
            <MovieRecommend />            
            <MovieRecommend />            
          </div>
        </div>
      </div>
    </div>
  )
}