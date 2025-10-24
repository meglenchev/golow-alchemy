import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name is requires!'],
        minLength: [2, 'Name shold be at least 2 characters long!'], 
    },
    skin: {
        type: String, 
        required: [true, 'Skin is requires!'],
        minLength: [10, 'Skin shold be at least 10 characters long!'], 
        maxLength: [100, 'Skin must be no longer than 100 characters.!'],
    },
    description: {
        type: String, 
        required: [true, 'Description is requires!'],
        minLength: [20, 'Description shold be at least 20 characters long!'], 
        maxLength: [200, 'Description must be no longer than 200 characters.!'],
    },
    ingredients: {
        type: String, 
        required: [true, 'Ingredients is requires!'],
        minLength: [2, 'Ingredients shold be at least 2 characters long!'], 
        maxLength: [50, 'Ingredients must be no longer than 50 characters.!'],
    },
    benefits: {
        type: String, 
        required: [true, 'Benefits is requires!'],
        minLength: [10, 'Benefits shold be at least 10 characters long!'], 
        maxLength: [100, 'Benefits must be no longer than 100 characters.!'],
    },
    price: {
        type: Number, 
        required: [true, 'Price is requires!'],
        minLength: [0, 'Price must be a positive number!'], 
    },
    image: {
        type: String, 
        required: [true, 'Image is required!'], 
        match: [/^https?:\/\//, 'Image Url is invalid'],
    },
    recommendList: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User', 
        required: [true, 'Product must have an owner!']
    }
});

export const Product = model('Product', productSchema, 'products');