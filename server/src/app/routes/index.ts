import { Router } from 'express'
import { ProductRoutes } from '../modules/product/product.route'
import { CartRoutes } from '../modules/cart/cart.route'

const router = Router()

const modulesRoutes = [
  { path: '/products', route: ProductRoutes },
  { path: '/carts', route: CartRoutes },
]

modulesRoutes.forEach(route => router.use(route.path, route.route))
export default router
