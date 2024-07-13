import { Router } from 'express'
import { ProductRoutes } from '../modules/product/product.route'
import { CartRoutes } from '../modules/cart/cart.route'
import { paymentRoutes } from '../modules/payment/payment.route'

const router = Router()

const modulesRoutes = [
  { path: '/products', route: ProductRoutes },
  { path: '/carts', route: CartRoutes },
  { path: '/payments', route: paymentRoutes },
]

modulesRoutes.forEach(route => router.use(route.path, route.route))
export default router
