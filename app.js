const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const date = require(__dirname + "/date");
let items = [];
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("."));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { date: date.getDate(), newListItem: items });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  if (req.body.newItem == "") {
    console.log("nothing");
  } else {
    items.push(item);
  }
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(8080, () => "Server Got started...!");
