import mongoose from 'mongoose'

export type TCart = {
  product: mongoose.ObjectId
  cartQuantity: number
}
