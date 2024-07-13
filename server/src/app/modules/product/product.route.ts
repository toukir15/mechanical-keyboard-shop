import { Router } from 'express'
import { ProductControllers } from './product.controller'
import validateRequest from '../../middlewares/validateRequest'
import { ProductValidations } from './product.validation'
import { upload } from '../../utils/sendImageToCloudinary'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  (req, res, next) => {
    const parseData = JSON.parse(req.body.data)
    const data = {
      name: parseData.productName,
      brand: parseData.brand,
      description: parseData.description,
      price: Number(parseData.price),
      rating: Number(parseData.rating),
      availableQuantity: Number(parseData.availableQuantity),
    }
    req.params = { id: '555' }
    req.body = data
    next()
  },
  validateRequest(ProductValidations.productSchemaValidation),
  ProductControllers.createProduct,
)

router.get('/', ProductControllers.getProducts)
router.get('/:id', ProductControllers.getSingleProduct)
router.delete('/:id', ProductControllers.deleteProduct)
router.patch(
  '/',
  upload.single('file'),
  (req, res, next) => {
    const parseData = JSON.parse(req.body.data)
    const data = {
      id: parseData.id,
      name: parseData.productName,
      brand: parseData.brand,
      description: parseData.description,
      price: Number(parseData.price),
      rating: Number(parseData.rating),
      availableQuantity: Number(parseData.availableQuantity),
    }
    req.body = data
    next()
  },
  ProductControllers.updateProduct,
)

export const ProductRoutes = router
