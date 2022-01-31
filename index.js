const { response } = require("express");
const express = require("express");

//creates an API named app
const app = express();

app.get("/", (request, response) => {
  response.send("My first Express API...works!");
});

app.listen(3000, () => console.log("Listening on port 3000..."));
