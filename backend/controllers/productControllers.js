const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    // Passing an empty object as a parameter returns all the data from the db
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.log(error, "Error during getAllProducts request");
    res.status(500).json({ message: "Server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.json(product);
  } catch (error) {
    console.log(error, "Error during getProductById request");
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllProducts, getProductById };
