"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_route_1 = require("../modules/product/product.route");
const cart_route_1 = require("../modules/cart/cart.route");
const payment_route_1 = require("../modules/payment/payment.route");
const router = (0, express_1.Router)();
const modulesRoutes = [
    { path: '/products', route: product_route_1.ProductRoutes },
    { path: '/carts', route: cart_route_1.CartRoutes },
    { path: '/payments', route: payment_route_1.paymentRoutes },
];
modulesRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
