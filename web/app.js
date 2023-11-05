const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Weatherdata = require("./models/customer");
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;

app.get("/", async (req, res) => {
  try {
    const result = await Weatherdata.find();
    res.send({ data: result });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

const start = async () => {
  try {
    await mongoose.connect(CONNECTION);

    app.listen(PORT, () => {
      console.log("Server running on Port:" + PORT);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
