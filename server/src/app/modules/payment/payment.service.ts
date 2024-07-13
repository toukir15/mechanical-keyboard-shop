import Stripe from 'stripe'
import config from '../../config'
const stripe = new Stripe(config.stripe_secret as string)

type TCart = {
  _id: string
  product: string
  cartQuantity: number
  inStock: number
  totalPrice: number
  name: string
  brand: string
  price: number
  img: string
}[]

type TCustomer = {
  firstName: string
  lastName: string
  email: string
  number: string
  deliveryAddress: string
}

const createPayment = async (carts: TCart, customerData: TCustomer) => {
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = []

  for (const product of carts) {
    const stripeProduct = await stripe.products.create({
      name: product.name,
    })

    const price = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: product.price * 100, // Stripe requires amount in cents
      currency: 'usd',
    })

    lineItems.push({
      price: price.id,
      quantity: product.cartQuantity,
    })
  }

  const customer = await stripe.customers.create({
    email: customerData.email,
    name: customerData.firstName + ' ' + customerData.lastName,
    phone: customerData.number,
    metadata: {
      address: customerData.deliveryAddress,
    },
  })

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    success_url: 'http://localhost:5173',
    cancel_url: 'http://localhost:5173/products',
    customer: customer.id,
  })
  return session
}

export const PaymentServices = { createPayment }
