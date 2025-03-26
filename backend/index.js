require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const productRoutes = require("./routes/productRoutes")
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/products", productRoutes)

const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url)
  .then(() => console.log('Connected with reactDB'))
  .catch(err => console.error("MongoDB Connection Error:", err));

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
