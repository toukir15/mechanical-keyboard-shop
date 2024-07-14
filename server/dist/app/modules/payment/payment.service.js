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
        success_url: 'https://mechanical-keyboard-shop-client.onrender.com/',
        cancel_url: 'https://mechanical-keyboard-shop-client.onrender.com/products',
        customer: customer.id,
    });
    // return { sessionId: session.id }
    return session;
});
// const endpointSecret =
//   'whsec_2305593bfaeeb4dc5073fe220e8c92b9702b55bc9a5b527d0ed2715ab8c3f7b5'
const webhook = () => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(sig)
    // console.log('webhook')
    // let event
    // try {
    //   event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
    // } catch (err) {
    //   console.log(`⚠️  Webhook signature verification failed:`)
    // }
    // Handle the event
    // switch (event.type) {
    //   case 'payment_intent.succeeded':
    //     const paymentIntent = event.data.object
    //     console.log(`PaymentIntent was successful!`)
    //     break
    //   // ... handle other event types
    //   default:
    //     console.log(`Unhandled event type ${event.type}`)
    // }
});
exports.PaymentServices = { createPayment, webhook };
