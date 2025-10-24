import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import productServices from "../services/productServices.js";

export const productController = Router();

productController.get('/add-product', isAuth, (req, res) => {
    res.render('products/create', { pageTitle: 'Create Product - GlowAlchemy' })
});

productController.post('/add-product', isAuth, async (req, res) => {
    const productData = req.body;
    const userId = req.user.id;

    try {
        await productServices.addProduct(productData, userId);

        res.redirect('/products');
    } catch (err) {
        const errorMessage = getErrorMessage(err);

        res.status(400).render('products/create', {
            error: errorMessage,
            product: productData,
            pageTitle: 'Create Product - GlowAlchemy'
        });
    }
});

productController.get('/', async (req, res) => {
    const products = await productServices.getAll();

    res.render('products/catalog', {
        products, 
        pageTitle: 'Product Catalog - GlowAlchemy',
    })
});