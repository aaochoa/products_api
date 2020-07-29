const router = require('express').Router();
const Product = require('../models/Product');
const verify = require('./verifyToken');
const {productValidation} = require('../validation');

router.get('/', verify, async (req, res) => {
  products = await Product.find();
  res.send(products);
});

router.post('/create', verify, (req, res) => {
  const {error} = productValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const product = new Product({
    name: req.body.name,
    telephone: req.body.telephone,
    description: req.body.description,
    addresses: req.body.addresses
  });
  try {
    const savedProduct = product.save();
    res.send({message: "Products saved"})
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;