const express = require("express");
const router = express.Router();

const {
  postNewUser,
  postExistingUser,
} = require("../controllers/userControllers");

// POST a new User - /user/signup
router.post("/signup", postNewUser);

// POST an existing User - /user/signin
router.post("/signin", postExistingUser);

module.exports = router;
