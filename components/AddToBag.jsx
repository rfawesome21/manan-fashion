"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '@/app/lib/sanity'

const AddToBag = ({product, image}) => {
  const { addItem, handleCartClick } = useShoppingCart()

  const productData = {
    name: product.name,
    description: product.description,
    id: product.id,
    price: product.price,
    currency: '$',
    image: urlFor(image).url(),
    price_id: product.price_id
  }

  return (
    <Button onClick={() => {
        addItem(productData), handleCartClick();
      }} 
    >
        Add to cart
    </Button>
  )
}

export default AddToBag