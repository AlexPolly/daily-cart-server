const express = require('express')
const productController = require('../Controllers/productContoller')
const userController = require('../Controllers/userController')


const router = new express.Router()

// get all products
router.get('/products/all',productController.getAllProductsContoller)

// register
router.post('/user/register',userController.registerController)

// login
router.post('/user/login',userController.loginController)

// getproduct
router.get('/product/get/:id',productController.getProductContoller)

// addto wishlist
router.get('/wishlist/add/:id',jwtMiddleware,wishlistController.addToWishlistController)



module.exports = router