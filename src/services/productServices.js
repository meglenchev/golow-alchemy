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
    getOne(productId) {
        return Product.findById(productId);
    },
    update(productId, productData) {
        return Product.findByIdAndUpdate(productId, productData, { runValidators: true });
    },
    recommend(productId, userId) {
        return Product.findByIdAndUpdate(productId, { $push: { recommendList: userId } });
    }
}