const express = require("express");
const router = express.Router();
const { 
  getAllProducts, 
  getFeaturedProducts, 
  getProductsByPrice, 
  getProductsByRating, 
  addProduct, 
  deleteProduct, 
  updateProduct,
  detailedProduct
} = require("../controllers/product");

// Get all products
router.get("/", getAllProducts);

router.get("/:id", detailedProduct);

// Add a new product
router.post("/add", addProduct);

// Update a product
router.patch("/:id", updateProduct);

// Delete a product
router.delete("/:id", deleteProduct);

// Fetch featured products
router.get("/featured", getFeaturedProducts);

// Fetch products with price less than a certain value
router.get("/price/:value", getProductsByPrice);

// Fetch products with rating higher than a certain value
router.get("/rating/:value", getProductsByRating);

module.exports = router;
