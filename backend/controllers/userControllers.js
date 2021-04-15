const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const postNewUser = async (req, res) => {
  const { email, password, firstName, lastName, address, postCode } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(404).json({ message: "User already not exist." });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      address,
      postCode,
    });

    // the second argument would normally be a secret key
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      "test",
      { expiresIn: "1h" }
    );
    return res.status(200).json({ result: existingUser, token });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

const postExistingUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist." });

    const correctPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!correctPassword)
      return res.status(400).json({ message: "Invalid login credentials." });

    // the second argument would normally be a secret key
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    return res.status(200).json({ result: existingUser, token });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = { postNewUser, postExistingUser };
