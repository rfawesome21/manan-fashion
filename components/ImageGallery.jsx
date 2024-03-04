"use client"
import { urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import React from 'react'

const ImageGallery = ({images}) => {
  const [bigImage, setBigImage] = React.useState(images[0])

  return (
    <div className='grid gap-4 lg:grid-cols-5'>
        <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
            {images.map((image, index) => (
                <div key={index} className='bg-gray-100 rounded-lg overflow-hidden'>
                    <Image 
                        src={urlFor(image).url()}
                        alt='Product Image'
                        className='h-full w-full object-cover object-center cursor-pointer'
                        width={200}
                        height={200}
                        priority
                        onClick={() => setBigImage(image)}
                    />
                </div>
            ))}
        </div>
        <div className='relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
            <Image 
                src={urlFor(bigImage).url()}
                alt='Product Image'
                className='h-full w-full object-cover object-center'
                width={500}
                priority
                height={500}
            />
            <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white'>
                Sale
            </span>
        </div>
    </div>
  )
}

export default ImageGallery