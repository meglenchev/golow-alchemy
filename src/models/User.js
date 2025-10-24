import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name is requires!'],
        minLength: [2, 'Name shold be at least 2 characters long!'], 
        maxLength: [20, 'Name must be no longer than 100 characters.!'],
    },
    email: {
        type: String, 
        required: [true, 'E-mail is required!'], 
        unique: [true, 'E-mail should be unique!'], 
        minLength: [10, 'E-mail shold be at least 10 characters long!'], 
    },
    password: {
        type: String, 
        required: [true, 'Password is required!'], 
        minLength: [4, 'Password shold be at least 4 characters long!'], 
    }
});

userSchema.pre('save', async function() {
   this.password = await bcrypt.hash(this.password, 10); 
});

export const User = model('User', userSchema, 'users');