"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validation_1 = require("./product.validation");
const sendImageToCloudinary_1 = require("../../utils/sendImageToCloudinary");
const router = (0, express_1.Router)();
router.post('/', sendImageToCloudinary_1.upload.single('file'), (req, res, next) => {
    const parseData = JSON.parse(req.body.data);
    const data = {
        name: parseData.productName,
        brand: parseData.brand,
        description: parseData.description,
        price: Number(parseData.price),
        rating: Number(parseData.rating),
        availableQuantity: Number(parseData.availableQuantity),
    };
    req.params = { id: '555' };
    req.body = data;
    next();
}, (0, validateRequest_1.default)(product_validation_1.ProductValidations.productSchemaValidation), product_controller_1.ProductControllers.createProduct);
router.get('/', product_controller_1.ProductControllers.getProducts);
router.get('/:id', product_controller_1.ProductControllers.getSingleProduct);
router.delete('/:id', product_controller_1.ProductControllers.deleteProduct);
router.patch('/', sendImageToCloudinary_1.upload.single('file'), (req, res, next) => {
    const parseData = JSON.parse(req.body.data);
    const data = {
        id: parseData.id,
        name: parseData.productName,
        brand: parseData.brand,
        description: parseData.description,
        price: Number(parseData.price),
        rating: Number(parseData.rating),
        availableQuantity: Number(parseData.availableQuantity),
    };
    req.body = data;
    next();
}, product_controller_1.ProductControllers.updateProduct);
exports.ProductRoutes = router;
