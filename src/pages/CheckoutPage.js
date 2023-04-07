import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'

// extra imports

import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <PageHero title='checkout' />
      checkout
    </main>
  )
}

export default CheckoutPage
