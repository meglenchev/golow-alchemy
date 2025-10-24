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

productController.get('/:productId/details', async (req, res) => {
    const productId = req.params.productId;

    try {
        const product = await productServices.getOne(productId);

        const isOwner = product.owner && product.owner._id.equals(req.user?.id);
        
        const isRecommended = product.recommendList.some(user => user.equals(req.user?.id));

        res.render('products/details', {
            product,
            isOwner,
            isRecommended, 
            pageTitle: "Product's Details - GlowAlchemy"
        });

    } catch (err) {
        res.render('404', { error: 'Something went wrong!' })
    }
});