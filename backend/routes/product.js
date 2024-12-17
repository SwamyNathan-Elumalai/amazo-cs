const express = require('express')
const { getProducts, getSingleProducts } = require('../controllers/productController')
const router = express.Router()

router.route('/products').get(getProducts)
router.route('/products/:id').get(getSingleProducts)

// export these all products page 

module.exports = router ;