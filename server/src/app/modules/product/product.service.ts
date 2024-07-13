import mongoose from 'mongoose'
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary'
import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDB = async (
  payload: TProduct,
  file?: Express.Multer.File,
) => {
  const cloudinayImgData = await sendImageToCloudinary(
    payload.brand + payload.availableQuantity + payload.rating,
    file?.path as string,
  )
  const data = { ...payload, img: cloudinayImgData.secure_url }
  const result = await Product.create(data)
  return result
}

const getProductsFromDB = async () => {
  const result = await Product.find({ isDeleted: false }).sort({
    createdAt: -1,
  })
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

const updateProductIntoDB = async (
  id: string,
  payload: TProduct,
  file?: Express.Multer.File,
) => {
  const isProductExist = await Product.findById(id, { isDeleted: false })
  if (!isProductExist) {
    console.log('product is not available')
  }

  // if the file is not undefind
  let cloudinayImgData
  let modifiedPayload = payload
  if (file) {
    cloudinayImgData = await sendImageToCloudinary(
      payload.brand! + payload.availableQuantity + payload.rating,
      file?.path as string,
    )
  }

  console.log(cloudinayImgData?.secure_url)
  if (cloudinayImgData?.secure_url) {
    modifiedPayload = { ...payload, img: cloudinayImgData.secure_url as string }
  }

  const updateProduct = await Product.findOneAndUpdate(
    { _id: id },
    modifiedPayload,
    {
      new: true,
      runValidators: true,
    },
  )
  return updateProduct
}

export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  deleteProductIntoDB,
  getSingleProduct,
  updateProductIntoDB,
}
