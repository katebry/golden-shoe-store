require("dotenv").config();

const express = require("express");
const connectDb = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

connectDb();

const SENDGRID_API = process.env.SENDGRID_API;
const EMAIL = process.env.EMAIL;

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
);

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.post("/send", (req, res) => {
  const { name, email, message, subject } = req.body;
  console.log(name, email, message)
  transporter
    .sendMail({
      to: email,
      from: EMAIL,
      subject: subject,
      html: `<h3>${name}</h3>
    <p>We received your message: ${message}</p>
    <p>We will respond within the next 48 hours.</p>
    <p>Kind regards,</p>
    <p>The Golden Shoe Team </p>
    `
    })
    .then((resp) => {
      res.json({ resp });
    })
    .catch((err) => {
      console.log(err);
    });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.exports = transporter;
