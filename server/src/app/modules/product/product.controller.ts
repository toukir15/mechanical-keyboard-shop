import { catchAsync } from '../../utils/catchAsync'

const createProduct = catchAsync(async (req, res, next) => {
  const productData = req.body
  console.log(productData)
})

export const ProductControllers = { createProduct }
