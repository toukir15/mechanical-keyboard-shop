import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { CartServices } from './cart.service'

const createCart = catchAsync(async (req, res, next) => {
  const result = await CartServices.createCartIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart created successfully',
    data: result,
  })
})
const getCarts = catchAsync(async (req, res, next) => {
  const result = await CartServices.getCartsFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart retrives successfully',
    data: result,
  })
})

const updateCart = catchAsync(async (req, res, next) => {
  const id = req.params.id
  const result = await CartServices.updateCartIntoDB(req.body, id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart updated successfully',
    data: result,
  })
})

const deleteCart = catchAsync(async (req, res, next) => {
  const id = req.params.id
  const result = await CartServices.deleteCartFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart deleted successfully',
    data: result,
  })
})

export const CartController = { createCart, getCarts, updateCart, deleteCart }
