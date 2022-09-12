const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.get("/status", (request, response) => {
  const result = {
    result: "OK - healthy",
  };
  response.send(result);
});

app.get("/metrics", (request, response) => {
  const result = {
    data: {
      UserCount: 140,
      UserCountActive: 21,
    },
  };
  response.send(result);
});

app.listen(8080, () => {
  console.log(`Server is running at port ${8080}.`);
});
