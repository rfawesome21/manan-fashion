import React from 'react'
import { client, urlFor } from '@/app/lib/sanity'
import Link from 'next/link'
import Image from 'next/image'

async function getData(name) {
    let categoryString = `&& category->name == "${name}"`
    if (name === 'all') {
        categoryString = ''
    }
    const query = `*[_type == "product" ${categoryString}] {
        _id,
          "imageUrl": image[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

    const data = await client.fetch(query)

    return data
}

const page = async ({params}) => {
  const data = await getData(params.category)
  return (
    <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
                <div className='flex justify-between items-center'>
                    <h2 className='tracking-tight text-2xl font-bold text-gray-900'>
                        Our products for {params.category}
                    </h2>
                </div>
                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                    {

                        data.length > 0 ? data.map((product, index) => {
                            return (
                                <div key={index} className='group relative'>
                                    <div className='aspect-square w-full lg:h-80 group-hover:opacity-80 bg-gray-200 rounded-medium overflow-hidden'>
                                        <Image
                                            src={urlFor(product.imageUrl).url()}
                                            alt={product.name}
                                            className='w-full h-full lg:w-full lg:h-full object-cover object-center'
                                            width={300}
                                            height={300}
                                            priority
                                        />
                                    </div>
                                    <div className='mt-4 flex justify-between'>
                                        <div>
                                            <h3 className='text-sm text-gray-700'>
                                                <Link href={`/product/${product.slug}`}>
                                                    {product.name}
                                                </Link>
                                            </h3>
                                            <p className='mt-1 text-sm text-gray-500'>
                                                {product.categoryName}
                                            </p>
                                        </div>
                                        <p className='text-sm font-medium text-gray-900'>
                                            ${product.price}
                                        </p>
                                    </div>
                                </div>
                            )
                        }) : <p>No products found</p>
                    }
                </div>
            </div>
        </div>
  )
}

export default page