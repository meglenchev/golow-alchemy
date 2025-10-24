import { Router } from "express";
import { homeController } from "./controller/homeController.js";
import { authController } from "./controller/authController.js";
import { productController } from "./controller/productController.js";

export const routes = Router();

routes.use(homeController);
routes.use('/auth', authController);
routes.use('/products', productController);

routes.get('/*splat', (req, res) => {
    res.status(404).render('404', { pageTitle: '404 Page not found' });
});