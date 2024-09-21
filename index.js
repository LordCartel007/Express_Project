import express from "express";
import { verifyRequestTime } from "./middlewares/time.middleware.js";

const app = express();

// configuring express to use pug as template engine
// seting the view engine to pug
app.set("view engine", "pug");

// seting views location
app.set("views", "./views");

app.use(verifyRequestTime);

// set up middeleware to serve static files
app.use(express.static("./public"));

// route to render the pug template
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/ourservice", (req, res) => {
  res.render("ourservice");
});

app.get("/ContactUs", (req, res) => {
  res.render("ContactUs");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
