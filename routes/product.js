const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require('../models/Product')

router.get("/all", async (req, res, next) => {
  try {
    const allProducts = await Product.find()
    res.status(200).json(allProducts)
  } catch (error) {
    console.log(error);
    next(`${error}, this error`);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const {item, amount, price} = req.body
    const newProduct = await Product.create({item, amount, price})
    res.status(200).json(newProduct)
  } catch (error) {
    console.log(error);
    next(`${error}, this error`);
  }
});

router.delete('/delete/:id', async (req, res, next) => {
  try {  
    const id = req.params.id
    const product = await Product.findByIdAndDelete(id)
    res.status(200)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
