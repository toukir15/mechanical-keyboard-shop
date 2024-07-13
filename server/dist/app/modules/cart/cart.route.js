"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoutes = void 0;
const express_1 = require("express");
const cart_controller_1 = require("./cart.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const cart_validation_1 = require("./cart.validation");
const router = (0, express_1.Router)();
router.post('/', (0, validateRequest_1.default)(cart_validation_1.CartValidations.cartSchemaValidation), cart_controller_1.CartController.createCart);
router.get('/', cart_controller_1.CartController.getCarts);
router.patch('/:id', cart_controller_1.CartController.updateCart);
router.delete('/:id', cart_controller_1.CartController.deleteCart);
exports.CartRoutes = router;
