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


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


// Send every request to the React app
// Define any API routes before this runs
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


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);

  db.Book.create({
      title: "The Hunger Games",
      authors: ["Suzanne Collins"],
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
    }
  ).then(data => console.log("document added"));
});
