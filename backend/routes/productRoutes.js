const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controllers/productControllers");

// GET all products - /api/products
router.get("/", getAllProducts)

// GET a product by id - /api/products/:id
router.get("/:id", getProductById);

module.exports = router;
