import { Router } from "express";
import productServices from "../services/productServices.js";

export const homeController = Router();

homeController.get('/', async (req, res) => { 
    const products = await productServices.getLatest();

    res.render('home', { 
        products,
        pageTitle: 'Home Page' 
    });
});