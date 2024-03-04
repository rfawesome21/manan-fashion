"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '@/app/lib/sanity'

const CheckoutNow = ({product, image}) => {
  const { checkoutSingleItem } = useShoppingCart()

  const productData = {
    name: product.name,
    description: product.description,
    id: product.id,
    price: product.price,
    currency: '$',
    image: urlFor(image).url(),
    price_id: product.price_id
  }

  const buyNow = async () => {
    await checkoutSingleItem(productData.price_id)
  }

  return (
    <Button onClick={() => {
        buyNow();
      }} 
    >
        Checkout now
    </Button>
  )
}

export default CheckoutNow