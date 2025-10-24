import productServices from "../services/productServices.js";

export async function isProductOwner(req, res, next) {
    const productId = req.params.productId;

    const product = await productServices.getOne(productId);

    if (!product.owner.equals(req.user.id)) {
        return res.status(401).render('404', { error: 'Only owner can edit this product!' })
    }

    req.product = product;

    next();
}