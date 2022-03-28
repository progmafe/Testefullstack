const express = require("express");

const app = express();

app.get("/", (req, res) => {    
  res.send("Hi Dockeeer!!!");
});

app.listen(8080);