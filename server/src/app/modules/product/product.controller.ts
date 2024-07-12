import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductServices } from './product.service'
import httpStatus from 'http-status'

const createProduct = catchAsync(async (req, res, next) => {
  const productData = req.body
  console.log(productData)
  const file = req.file
  const result = await ProductServices.createProductIntoDB(productData, file)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product added successfully',
    data: result,
  })
})

const getProducts = catchAsync(async (req, res, next) => {
  const result = await ProductServices.getProductsFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrive successfully',
    data: result,
  })
})

const getSingleProduct = catchAsync(async (req, res, next) => {
  const id = req.params.id
  const result = await ProductServices.getSingleProduct(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrive successfully',
    data: result,
  })
})

const deleteProduct = catchAsync(async (req, res, next) => {
  const id = req.params.id
  console.log(id)
  const result = await ProductServices.deleteProductIntoDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product retrive successfully',
    data: result,
  })
})

export const ProductControllers = {
  createProduct,
  getProducts,
  deleteProduct,
  getSingleProduct,
}
