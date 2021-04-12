require("dotenv").config();

const express = require("express");
const connectDb = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const emailRoute = require("./routes/emailRoute");

connectDb();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.use("/send", emailRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
