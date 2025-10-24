import { Product } from "../models/Product.js";

export default {
    addProduct(productData, userId) {
        return Product.create({
            ...productData,
            owner: userId,
        });
    },
    getAll(filter = {}) {
        return Product.find();
    },
}