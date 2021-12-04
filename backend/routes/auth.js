const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

const JWT_Secret = "secretpass1";
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "SHould be atleast 5 chars").isLength({ min: 5 }),
    body("name", "Enter a valid name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    // if errors return bad request and Array of errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry this user already exists" });
      } else {
        const salt = await bcrypt.genSalt(10);

        const securePassword = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: securePassword,
        });
      }
      const data = {};
      const authToken = jwt.sign(data, JWT_Secret);

      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server Error");
    }
  }
);
router.post(
  "/login",
  [
    body("email", "Enter you Email").isEmail(),
    body("password", "Enter your password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Wrong Email" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Wrong Password" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_Secret);
      res.json({ authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server  Error");
    }
  }
);

// Route 3
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server Error");
  }
});

module.exports = router;
