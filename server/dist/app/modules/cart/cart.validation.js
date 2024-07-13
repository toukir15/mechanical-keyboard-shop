"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartValidations = void 0;
const zod_1 = require("zod");
const cartSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        product: zod_1.z.string(),
        cartQuantity: zod_1.z.number(),
    }),
});
exports.CartValidations = { cartSchemaValidation };
