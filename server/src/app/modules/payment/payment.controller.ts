import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { PaymentServices } from './payment.service'

const createPayment = catchAsync(async (req, res, next) => {
  const products = req.body.products
  const customer = req.body.customer
  const result = await PaymentServices.createPayment(products, customer)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Create checkout session successfully',
    data: result,
  })
})

const webhook = catchAsync(async (req, res, next) => {
  const sig = req.headers['stripe-signature']
  const result = await PaymentServices.webhook()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Create checkout session successfully',
    data: result,
  })
})

export const PaymentControllers = { createPayment, webhook }
