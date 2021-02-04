const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    item: String,
    amount: Number,
    price: Number,
    timesPurchased: Number,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);


const Product = mongoose.model("Product", productSchema);

const createProduct = async() =>{
    const item= 'Milk'
    const amount = 2
    const price = 1
    const timesPurchased = 1

    await Product.create({item, amount, price, timesPurchased})
    console.log(item, amount, price)

}

// createProduct()

module.exports = Product;