const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  stock: {
    type: Number,
    required: true,
  },
  features: {
    type: [String], 
    required: true,
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields automatically
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
