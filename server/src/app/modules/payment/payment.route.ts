import { Router } from 'express'
import { PaymentControllers } from './payment.controller'

const router = Router()

router.post('/create-checkout-session', PaymentControllers.createPayment)
router.post('/webhooks', PaymentControllers.webhook)

export const paymentRoutes = router
