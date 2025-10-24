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
    getLatest() {
        return Product.find().sort({ _id: -1 }).limit(3);
    },
    getOne(productId) {
        return Product.findById(productId);
    },
    update(productId, productData) {
        return Product.findByIdAndUpdate(productId, productData, { runValidators: true });
    },
    delete(productId){
        return Product.findByIdAndDelete(productId);
    },
    recommend(productId, userId) {
        return Product.findByIdAndUpdate(productId, { $push: { recommendList: userId } });
    }
}