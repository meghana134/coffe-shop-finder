const CoffeeShop = require('../models/CoffeeShop');

// Get all coffee shops
exports.getCoffeeShops = async (req, res) => {
  try {
    const coffeeShops = await CoffeeShop.find();
    res.json(coffeeShops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single coffee shop
exports.getCoffeeShopById = async (req, res) => {
  try {
    const coffeeShop = await CoffeeShop.findById(req.params.id);
    if (!coffeeShop) return res.status(404).json({ message: 'Coffee shop not found' });
    res.json(coffeeShop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new coffee shop
exports.createCoffeeShop = async (req, res) => {
  const { name, location, rating, products, images } = req.body;
  const coffeeShop = new CoffeeShop({ name, location, rating, products, images });
  try {
    const newCoffeeShop = await coffeeShop.save();
    res.status(201).json(newCoffeeShop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
