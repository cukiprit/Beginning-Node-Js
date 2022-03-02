const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/blog", { useNewUrlParser: true });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("aboout");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.listen(3000, () => console.log("App listening on port 3000"));
