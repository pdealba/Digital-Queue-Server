require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");

app.use(bodyParser.json());

app.use("/admin", adminRoutes);

mongoose
  .connect(process.env.DIGITAL_QUEUE_SERVER_URI)
  .then(() => {
    app.listen(1234);
  })
  .catch((err) => console.log(err));
