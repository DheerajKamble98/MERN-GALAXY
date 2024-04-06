const express = require("express");
const Product = require("../models/productModel");
const {
  getProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controller/productController");

const router = express.Router();

//CREATE A PRODUCT

router.post("/", createProduct);

//GET ALL PRODUCTS
router.get("/", getProducts);

//GET A PARTICULAR PRODUCT BY ID
router.get("/:id", getProductById);

//UPDATE A PRODUCT
router.put("/:id", updateProduct);

//DELETE A PRODUCT

router.delete("/:id", deleteProduct);

module.exports = router;
