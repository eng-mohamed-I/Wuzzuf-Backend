import mongoose from "mongoose";
import env from "dotenv";
env.config();

let uri = process.env.DATABASE_URI;

let dbConnection = mongoose
  .connect(uri)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Faild connect to database", err);
  });

export default dbConnection;
