import express from "express";

const app = express();

const port = 3000;

app.get("/api/health", (req, res) => {
  res.json("Express Server API is working.");
});

app.listen(port, () => {
  console.log("Express server started");
});
