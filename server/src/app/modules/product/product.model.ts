import mongoose from 'mongoose'
import { TProduct } from './product.interface'
const { Schema } = mongoose

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    availableQuantity: { type: Number, required: true },
    rating: { type: Number, required: true },
    img: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
)

export const Product = mongoose.model<TProduct>('product', productSchema)
