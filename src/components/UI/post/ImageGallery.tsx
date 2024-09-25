'use client'

import LightGallery from 'lightgallery/react'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  images: string[]
}

const ImageGallery = ({ images }: IProps) => {
  return (
    <LightGallery
      elementClassNames={`mt-2 gap-2 grid place-items-center ${images?.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}>
      {images?.map((image, index) => (
        <Link
          key={index}
          className={`w-full ${images.length === 3 && index === 0 ? 'col-span-2' : 'col-span-1'}`}
          href={image}>
          <Image
            className='w-full h-[400px] object-cover'
            src={image}
            alt={`image-${index + 1}`}
            height={500}
            width={500}
          />
        </Link>
      ))}
    </LightGallery>
  )
}

export default ImageGallery
