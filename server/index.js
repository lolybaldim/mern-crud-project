const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/user");

const app = express();
app.use(cors());
app.use(express.json());

// MANUAL STEP: replace this connection string with your own MongoDB
// (local Compass instance or MongoDB Atlas connection string)
mongoose.connect("mongodb+srv://samardeidara_db_user:wUi20XzRqSFF2xEW@cluster0.eo9bh1v.mongodb.net/crud?appName=Cluster0");

// CREATE
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// READ ALL
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// READ ONE
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// UPDATE
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// DELETE
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then((res2) => res.json(res2))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
