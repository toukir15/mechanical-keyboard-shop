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
exports.ProductServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const product_model_1 = require("./product.model");
const createProductIntoDB = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    const cloudinayImgData = yield (0, sendImageToCloudinary_1.sendImageToCloudinary)(payload.brand + payload.availableQuantity + payload.rating, file === null || file === void 0 ? void 0 : file.path);
    const data = Object.assign(Object.assign({}, payload), { img: cloudinayImgData.secure_url });
    const result = yield product_model_1.Product.create(data);
    return result;
});
const getProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({ isDeleted: false }).sort({
        createdAt: -1,
    });
    return result;
});
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findOne({ _id: id, isDeleted: false });
    return result;
});
const deleteProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
});
const updateProductIntoDB = (id, payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate ObjectId
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        throw new Error(`Invalid product ID: ${id}`);
    }
    // Check if the product exists
    const isProductExist = yield product_model_1.Product.findOne({ _id: id, isDeleted: false });
    if (!isProductExist) {
        throw new Error('Product is not available');
    }
    // Initialize modifiedPayload with the original payload
    // let modifiedPayload = { ...payload }
    // If the file is provided, upload it to Cloudinary
    // if (file) {
    //   const cloudinayImgData = await sendImageToCloudinary(
    //     `${payload.brand!}${payload.availableQuantity}${payload.rating}`,
    //     file.path as string,
    //   )
    // If the image upload is successful, update the img property
    //   if (cloudinayImgData?.secure_url) {
    //     modifiedPayload = {
    //       ...payload,
    //       img: cloudinayImgData.secure_url as string,
    //     }
    //   }
    // }
    // Update the product in the database
    const updateProduct = yield product_model_1.Product.findByIdAndUpdate(isProductExist._id, payload, {
        new: true,
    });
    return updateProduct;
});
exports.ProductServices = {
    createProductIntoDB,
    getProductsFromDB,
    deleteProductIntoDB,
    getSingleProduct,
    updateProductIntoDB,
};
