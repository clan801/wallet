const express = require("express");
const mongoose = require("mongoose");
const serverless = require("serverless-http");
const sendData = require("./Schema");

const app = express();

mongoose.connect(
  "mongodb+srv://testuser:testuser788@trust.ybts3.mongodb.net/trust?retryWrites=true&w=majority",
  () => {
    // console.log("connected");
  },
  (error) => {
    // console.log(error);
  }
);

app.use(express.json());

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

app.post("/.netlify/functions/route", async (req, res) => {
  let email = req.body.email;
  let secText = req.body.secText;

  let userData = await sendData.create({ email, secText });

  res.send({ email, secText });
});

// app.get("/.netlify/functions/route", async (req, res) => {
//   res.send({ tittle: "Working" });
// });

module.exports.handler = serverless(app);
