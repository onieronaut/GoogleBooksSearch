const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds237267.mlab.com:37267/heroku_s5ss13j3");

// API Routes
app.get("/api/books", (req,res) => {
  db.Book.find({}).then(data => res.json(data));
})

app.delete("/api/books/:id", (req,res) => {
  db.Book.findById({_id: req.params.id})
          .then(book => book.remove())
          .then(book => res.json(book))
          .catch(err => res.status(422).json(err));
})

app.post("/api/books", (req,res) => {
  db.Book.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
})

//Reroutes to index page if page is not found
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
