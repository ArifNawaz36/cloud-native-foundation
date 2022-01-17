import * as express from "express";
import { config } from 'dotenv';
config(); // dotenv config

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

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running at port ${process.env.SERVER_PORT}.`);
});
