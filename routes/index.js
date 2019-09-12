const express = require("express");
const router = express.Router();
const Color = require("../models/colors");
const loggedIn = false;

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile", (req, res, next) => {
  // Get colors from database
  Color.find({})
    .then(colors => {
      res.render("profile.hbs", { colors });
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
});

router.post("/save-color", (req, res, next) => {
  // console.log(req.body.color);
  color = new Color({ name: req.body.color });
  Color.create(color)
    .then(doc => {
      res.redirect("profile");
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
});

//delete to /deleteColor
router.delete("/delete-color", isLoggedIn, (req, res, next) => {
  console.log("DELETE", req.body);
  Color.deleteOne({ name: req.body.color })
    .then(response => {
      res.json({ response });
    })
    .catch(err => {
      res.json(err)
    });
});

function isLoggedIn(req, res, next) {
  if (loggedIn) {
    next();
  } else {
    throw new Error({deleted:false});
    return
  }
}

module.exports = router;
