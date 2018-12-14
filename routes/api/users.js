const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const userValidate = require("../../helpers/validate/user");

router.post("/create", (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  const {errors, isValid} = userValidate.validateRegisterInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email }).then(user => {
    if (user) {
      errors.email = "Account with such email already exist"
      return res
        .status(400)
        .json(errors);
    } else {
      const newUser = new User({
        email: email
      });
      
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              return res.json(user);
            })

            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const {errors, isValid} = userValidate.validateLoginInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found"
      return res.json({errors});
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //User Matched
        const payload = {
          id: user._id,
          name: user.name,
          avatar: user.avatar,
          role: user.role
        };
        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        errors.password = "Password is incorrect"
        return res.status(400).json(errors);
      }
    });
  });
});
module.exports = router;
