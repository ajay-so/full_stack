const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    required: true,
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating must be at most 5"]
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  company: {
    type: String,
    required: true
  }
});

const Product = model("Product", productSchema);

module.exports = { Product };
