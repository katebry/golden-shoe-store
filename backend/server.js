require("dotenv").config();

const express = require("express");
const cors = require('cors')
const connectDb = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const emailRoute = require("./routes/emailRoute");
const userRoutes = require("./routes/userRoutes")

connectDb();

const app = express();

app.use(cors())

app.use(express.json());

app.use("/api/products", productRoutes);

app.use("/send", emailRoute);

app.use("/user", userRoutes)

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
