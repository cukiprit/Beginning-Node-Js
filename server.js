const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const ejs = require("ejs");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/blog", { useNewUrlParser: true });

app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render("index", {
    blogposts,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post/:id", async (req, res) => {
  const blogspot = await BlogPost.findById(req.params.id);

  res.render("post", {
    blogspot,
  });
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

app.post("/posts/store", async (req, res) => {
  let image = req.files.image;
  image.mv(
    path.resolve(__dirname, "/public/img", image.name),
    async (error) => {
      await BlogPost.create(req.body);
      res.redirect("/");
    }
  );
  // console.log(req.body);
});

app.listen(3000, () => console.log("App listening on port 3000"));
