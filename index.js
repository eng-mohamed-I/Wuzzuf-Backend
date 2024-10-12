import express from "express";
import env from "dotenv";
import cors from "cors";
import dbConnection from "./DATABASE /connection.js";

let server = express();

server.use(express.json());
dbConnection;

server.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

server.listen(5000, () => {
  console.log("server connected successfully");
});
