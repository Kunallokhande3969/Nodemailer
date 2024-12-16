const sendEmail = require("./email");

const express = require("express");
const app = express();

function kunal() {
  sendEmail(
    "lkunal382@gmail.com",
    "Google nodemail",
    "this side nodemailer",
  );
}

app.get("/", function (req, res) {
  res.send("hii");
});
app.get("/lokhande", function (req, res) {
    kunal();
});


app.listen(3000);
