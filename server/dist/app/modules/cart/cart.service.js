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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartServices = void 0;
const product_model_1 = require("../product/product.model");
const cart_model_1 = require("./cart.model");
const createCartIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // check product is exist in db or not
    const findProduct = yield product_model_1.Product.findOne({ _id: payload.product });
    if (!findProduct) {
        console.log('product is not exist');
    }
    //   check is already cart is create or not
    const findCart = yield cart_model_1.Cart.findOne({ product: payload.product });
    if (findCart) {
        // update cart quantity
        const updateCart = yield cart_model_1.Cart.findOneAndUpdate({ product: payload.product }, { $inc: { cartQuantity: payload.cartQuantity } }, { new: true });
        return updateCart;
    }
    else {
        const result = yield cart_model_1.Cart.create(payload);
        return result;
    }
});
const getCartsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.aggregate([
        // step-1: extract the data of products collection
        {
            $lookup: {
                from: 'products',
                localField: 'product',
                foreignField: '_id',
                as: 'productDetails',
            },
        },
        // step-2: unwind the productDetails array
        {
            $unwind: '$productDetails',
        },
        // step-3: add new field
        {
            $addFields: {
                inStock: {
                    $subtract: ['$productDetails.availableQuantity', '$cartQuantity'],
                },
                totalPrice: {
                    $multiply: ['$productDetails.price', '$cartQuantity'],
                },
            },
        },
        // step-4: project the nessessary data
        {
            $project: {
                _id: 1,
                name: '$productDetails.name',
                cartQuantity: 1,
                brand: '$productDetails.brand',
                price: '$productDetails.price',
                img: '$productDetails.img',
                inStock: 1,
                totalPrice: 1,
                product: 1,
            },
        },
    ]);
    return result;
});
const updateCartIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findByIdAndUpdate(id, { $inc: { cartQuantity: payload.type == 'increment' ? 1 : -1 } }, { new: true });
    return result;
});
const deleteCartFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findByIdAndDelete(id);
    return result;
});
exports.CartServices = {
    createCartIntoDB,
    getCartsFromDB,
    updateCartIntoDB,
    deleteCartFromDB,
};
