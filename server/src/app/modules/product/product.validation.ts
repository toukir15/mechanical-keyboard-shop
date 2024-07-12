import { z } from 'zod'

const productSchemaValidation = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    price: z
      .number({ required_error: 'Price is required' })
      .positive({ message: 'Price must be positive' }),
    brand: z.string({ required_error: 'Brand is required' }),
    isDeleted: z.boolean().optional(),
    availableQuantity: z
      .number({ required_error: 'Available quantity is required' })
      .int({ message: 'Available quantity must be an integer' })
      .nonnegative({ message: 'Available quantity must be non-negative' }),
    rating: z
      .number({ required_error: 'Rating is required' })
      .min(0, { message: 'Rating must be at least 0' })
      .max(5, { message: 'Rating must be at most 5' }),
  }),
})

export const ProductValidations = { productSchemaValidation }
