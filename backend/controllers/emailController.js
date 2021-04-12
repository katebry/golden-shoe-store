require("dotenv").config();

const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

const SENDGRID_API = process.env.SENDGRID_API;
const EMAIL = process.env.EMAIL;

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
);

const sendEmail = async (req, res) => {
  const { name, email, message, subject } = req.body;
  console.log(name, email, message);
  transporter
    .sendMail({
      to: email,
      from: EMAIL,
      subject: `Thanks for contacting Golden Shoe about: ${subject}`,
      html: `<h3>${name}</h3>
    <p>We received your message: ${message}</p>
    <p>We will respond within the next 48 hours.</p>
    <p>Kind regards,</p>
    <p>The Golden Shoe Team</p>
    `,
    })
    .then((resp) => {
      res.json({ resp });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = sendEmail;
