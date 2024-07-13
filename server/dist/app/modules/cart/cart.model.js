"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const cartSchema = new Schema({
    product: { type: mongoose_1.default.Types.ObjectId, required: true },
    cartQuantity: { type: Number, required: true },
}, { timestamps: true });
exports.Cart = mongoose_1.default.model('cart', cartSchema);
