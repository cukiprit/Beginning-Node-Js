const BlogPost = require("./models/BlogPost");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/blog", { useNewUrlParser: true })
  .then(() => console.log("connect"))
  .catch((err) => console.log(err));

// BlogPost.create(
//   {
//     title: "The Mythbuster’s Guide to Saving Money on Energy Bills",
//     body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:",
//   },
//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// BlogPost.find(
//   {
//     title: "The Mythbuster’s Guide to Saving Money on Energy Bills",
//   },
//   (error, blogspot) => {
//     console.log(error, blogspot);
//   }
// );

// BlogPost.find(
//   {
//     title: /The/,
//   },
//   (error, blogspot) => {
//     console.log(error, blogspot);
//   }
// );

let id = "621f9ad1fa3a7e87207f6aa4";

BlogPost.findById(id, (error, blogspot) => {
  console.log(error, blogspot);
});

BlogPost.findByIdAndUpdate(
  id,
  {
    title: "Updated title",
  },
  (error, blogspot) => {
    console.log(error, blogspot);
  }
);

BlogPost.findByIdAndDelete(id, (error, blogspot) => {
  console.log(error, blogspot);
});
