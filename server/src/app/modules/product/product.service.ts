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
  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(`Invalid product ID: ${id}`)
  }

  // Check if the product exists
  const isProductExist = await Product.findOne({ _id: id, isDeleted: false })
  if (!isProductExist) {
    throw new Error('Product is not available')
  }

  // Initialize modifiedPayload with the original payload
  // let modifiedPayload = { ...payload }

  // If the file is provided, upload it to Cloudinary
  // if (file) {
  //   const cloudinayImgData = await sendImageToCloudinary(
  //     `${payload.brand!}${payload.availableQuantity}${payload.rating}`,
  //     file.path as string,
  //   )

  // If the image upload is successful, update the img property
  //   if (cloudinayImgData?.secure_url) {
  //     modifiedPayload = {
  //       ...payload,
  //       img: cloudinayImgData.secure_url as string,
  //     }
  //   }
  // }

  // Update the product in the database
  const updateProduct = await Product.findByIdAndUpdate(
    isProductExist._id,
    payload,
    {
      new: true,
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
