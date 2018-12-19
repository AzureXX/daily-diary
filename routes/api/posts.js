const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/User");
const Post = require("../../models/Post");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.find({ user: req.user._id })
      .sort({ date: -1 })
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json(err));
  }
);

router.get(
  "/date/:date",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.find({ user: req.user._id, date: req.params.date })
      .sort({ createdAt: -1 })
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json(err));
  }
);

router.get(
  "/id/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        if (post.user.toString() == req.user._id.toString())
          return res.json(post);
        else {
          //Throw empty object for unknown reason
          throw new Error("No access")
        }  
      })
      .catch(err => res.status(404).json(err));
  }
);

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newPost = new Post({
      user: req.user._id,
      date: req.body.date,
      type: req.body.type,
      details: req.body.details || {}
    });
    newPost
      .save()
      .then(post => res.json(post))
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
