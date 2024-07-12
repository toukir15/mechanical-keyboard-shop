import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDB = async (
  payload: TProduct,
  file: Record<string, unknown>,
) => {
  const cloudinayImgData = await sendImageToCloudinary(
    payload.brand + payload.availableQuantity + payload.rating,
    file.path as string,
  )
  const data = { ...payload, img: cloudinayImgData.secure_url }
  const result = await Product.create(data)
  return result
}

const getProductsFromDB = async () => {
  const result = await Product.find({ isDeleted: false })
  return result
}
const getSingleProduct = async (id: string) => {
  const result = await Product.findOne({ _id: id, isDeleted: false })
  return result
}

const deleteProductIntoDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  )
  return result
}

export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  deleteProductIntoDB,
  getSingleProduct,
}
