import "dotenv/config";

import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.wadm1lu.mongodb.net/chat-app?retryWrites=true&w=majority`,
  () => {
    console.log("connected to database");
  }
);
