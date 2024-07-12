import { z } from 'zod'

const cartSchemaValidation = z.object({
  body: z.object({
    product: z.string(),
    cartQuantity: z.number(),
  }),
})

export const CartValidations = { cartSchemaValidation }
