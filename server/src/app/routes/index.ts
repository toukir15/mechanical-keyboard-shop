import { Router } from 'express'
import { ProductRoutes } from '../modules/product/product.route'

const router = Router()

const modulesRoutes = [{ path: '/products', route: ProductRoutes }]

modulesRoutes.forEach(route => router.use(route.path, route.route))
export default router
