import { Router } from 'express'
import { ProductControllers } from './product.controller'
import { upload } from '../../utils/sendImageToCloudinary'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data)
    next()
  },
  ProductControllers.createProduct,
)

export const ProductRoutes = router
