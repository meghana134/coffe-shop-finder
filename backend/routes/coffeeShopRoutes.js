const express = require('express');
const router = express.Router();
const {
  getCoffeeShops,
  getCoffeeShopById,
  createCoffeeShop,
} = require('../controllers/coffeeShopController');

router.get('/', getCoffeeShops);
router.get('/:id', getCoffeeShopById);
router.post('/', createCoffeeShop);

module.exports = router;
