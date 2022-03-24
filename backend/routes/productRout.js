import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "product not exist" });
  }
  res.status(200).json(product);
});

export default router;
