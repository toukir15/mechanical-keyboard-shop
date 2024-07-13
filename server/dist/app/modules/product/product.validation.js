"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidations = void 0;
const zod_1 = require("zod");
const productSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        price: zod_1.z
            .number({ required_error: 'Price is required' })
            .positive({ message: 'Price must be positive' }),
        brand: zod_1.z.string({ required_error: 'Brand is required' }),
        isDeleted: zod_1.z.boolean().optional(),
        availableQuantity: zod_1.z
            .number({ required_error: 'Available quantity is required' })
            .int({ message: 'Available quantity must be an integer' })
            .nonnegative({ message: 'Available quantity must be non-negative' }),
        rating: zod_1.z
            .number({ required_error: 'Rating is required' })
            .min(0, { message: 'Rating must be at least 0' })
            .max(5, { message: 'Rating must be at most 5' }),
    }),
});
exports.ProductValidations = { productSchemaValidation };
