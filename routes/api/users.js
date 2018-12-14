const express = require("express");
const router = express.Router();
const User = require("../../models/User");
router.get("/", (req, res) => {
  const newUser = new User({
    email: "example@example.com",
    password: "example"
  });
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

module.exports = router;
