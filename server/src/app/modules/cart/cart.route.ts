import { Router } from 'express'
import { CartController } from './cart.controller'
import validateRequest from '../../middlewares/validateRequest'
import { CartValidations } from './cart.validation'

const router = Router()
router.post(
  '/',
  validateRequest(CartValidations.cartSchemaValidation),
  CartController.createCart,
)
router.get('/', CartController.getCarts)
router.patch('/:id', CartController.updateCart)
router.delete('/:id', CartController.deleteCart)

export const CartRoutes = router
