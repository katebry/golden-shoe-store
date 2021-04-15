const express = require("express");
const router = express.Router();

const {
  postNewUser,
  postExistingUser,
} = require("../controllers/userControllers");

// POST a User
router.post("/", postNewUser, postExistingUser);

module.exports = router;
