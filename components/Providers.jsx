"use client"

import React from 'react'
import { CartProvider as UscProvider } from 'use-shopping-cart'

const CartProvider = ({children}) => {
  return (
    <UscProvider
        mode='payment'
        cartMode='client-only'
        stripe={process.env.STRIPE_API_KEY}
        successUrl='http://localhost:3000/stripe/success'
        cancelUrl='http://localhost:3000/stripe/error'
        currency='USD'
        billingAddressCollection={false}
        shouldPersist={true}
        language='en-US'
    >
        {children}
    </UscProvider>
  )
}

export default CartProvider