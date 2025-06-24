require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const products = require("./data/productAppend");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB333 connected");

    // Append products without deleting existing
    await Product.insertMany(products);
    console.log(`✅ Appended ${products.length} new products`);

    process.exit();
  })
  .catch((err) => {
    console.error("❌ Error appending data:", err);
    process.exit(1);
  });
