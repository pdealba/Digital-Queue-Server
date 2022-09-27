require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const client = require("./routes/server");

app.use("/api", client);

mongoose
  .connect(process.env.DIGITAL_QUEUE_SERVER_URI)
  .then(() => {
    app.listen(1234);
  })
  .catch((err) => console.log(err));
