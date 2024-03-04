import React from 'react'
import { client } from '@/app/lib/sanity'
import ImageGallery from '@/components/ImageGallery'
import { Button } from '@/components/ui/button'
import { Star, Truck } from 'lucide-react'
import AddToBag from '@/components/AddToBag'
import CheckoutNow from '@/components/CheckoutNow'

const getData = async (slug) => {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
        price,
        name,
        description,
        image,
        "slug": slug.current,
        "categoryName": category->name,
        "price_id": price_id
      }`
    const data = await client.fetch(query)

    return data
}

const ProductPage = async ({params}) => {
    const data = await getData(params.slug)
    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
                <div className='grid gap-8 md:grid-cols-2'>
                    <ImageGallery images={data.image} />
                    <div className='md:py-8'>
                        <div className='mb-2 md:mb-3'>
                            <span className='mb-0.5 inline-block text-gray-500'>
                                {data.categoryName}
                            </span>
                            <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                                {data.name}
                            </h2>

                            <div className='mb-6 flex items-center gap-3 md:mb-10'>
                                <Button className='rounded-full gap-x-2'>
                                    <span className='text-sm'>4.2</span>
                                    <Star className='h-5 w-5' />
                                </Button>
                                <span className='text-sm transition duration-100 text-gray-500'>(120 reviews)</span>
                            </div>

                            <div className='mb-4'>
                                <div className='flex items-end gap-2'>
                                    <span className='text-xl font-bold text-gray-800 md:text-2xl'>${data.price}</span>
                                    <span className='mb-0.5 text-red-500 line-through'>${data.price + 30}</span>
                                </div>
                                <span className='text-sm text-gray-500'>
                                    Inclusive of VAT + shipping
                                </span>
                                
                            </div>
                            <div className='mb-6 flex items-center gap-2 text-gray-500'>
                                <Truck className='h-6 w-6' />
                                <span className='text-sm'>2-4 days shipping</span>
                            </div>

                            <div className='flex gap-2.5'>
                                <AddToBag 
                                    product={data}
                                    image={data.image[0]}
                                />
                                <CheckoutNow
                                    product={data}
                                    image={data.image[0]}
                                />
                            </div>

                            <p className='mt-12 text-base text-gray-500 tracking-wide'>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage