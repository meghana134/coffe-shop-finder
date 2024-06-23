const mongoose = require('mongoose');

const CoffeeShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  products: [
    {
      name: String,
      price: Number,
      category: String,
    },
  ],
  images: [String],
});

module.exports = mongoose.model('CoffeeShop', CoffeeShopSchema);
