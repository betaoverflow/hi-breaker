import mongoose from "mongoose";
require("dotenv").config();

const dbUri = process.env.DB_CONNECTION as string;
mongoose.connect(dbUri, (err) => {
  if (!err) console.log("Database connected and running");
  else console.log("Database error: " + JSON.stringify(err, undefined, 2));
});
