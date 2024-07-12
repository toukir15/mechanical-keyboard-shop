import mongoose from 'mongoose'
import { TCart } from './cart.interface'
const { Schema } = mongoose

const cartSchema = new Schema<TCart>({
  product: { type: mongoose.Types.ObjectId, required: true },
  cartQuantity: { type: Number, required: true },
})

export const Cart = mongoose.model<TCart>('cart', cartSchema)
