var express = require("express");
const { route } = require("./users");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Hello Naim!",
    user: "Sofian",
    added: new Date(),
  },
  {
    text: "Hello Diogo!",
    user: "Leonor",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form");
});
router.post("/new", (req, res, next) => {
  let messageText = req.body.message;
  let messageUser = req.body.name;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;
