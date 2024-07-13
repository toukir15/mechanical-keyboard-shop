"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentServices = void 0;
const stripe_1 = __importDefault(require("stripe"));
const config_1 = __importDefault(require("../../config"));
const stripe = new stripe_1.default(config_1.default.stripe_secret);
const createPayment = (carts, customerData) => __awaiter(void 0, void 0, void 0, function* () {
    const lineItems = [];
    for (const product of carts) {
        const stripeProduct = yield stripe.products.create({
            name: product.name,
        });
        const price = yield stripe.prices.create({
            product: stripeProduct.id,
            unit_amount: product.price * 100, // Stripe requires amount in cents
            currency: 'usd',
        });
        lineItems.push({
            price: price.id,
            quantity: product.cartQuantity,
        });
    }
    const customer = yield stripe.customers.create({
        email: customerData.email,
        name: customerData.firstName + ' ' + customerData.lastName,
        phone: customerData.number,
        metadata: {
            address: customerData.deliveryAddress,
        },
    });
    const session = yield stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: lineItems,
        success_url: 'http://localhost:5173',
        cancel_url: 'http://localhost:5173/products',
        customer: customer.id,
    });
    return session;
});
exports.PaymentServices = { createPayment };
