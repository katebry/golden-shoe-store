require("dotenv").config();

const express = require("express");
const connectDb = require("./config/db")

connectDb();

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
