"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const productSchema = new Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    availableQuantity: { type: Number, required: true },
    rating: { type: Number, required: true },
    img: { type: String },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });
exports.Product = mongoose_1.default.model('product', productSchema);
