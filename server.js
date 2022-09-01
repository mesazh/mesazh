import express from "express";
const app = express();

import cors from "cors";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
import "./connection.js";
import http from "http";
const server = http.createServer(app);
const PORT = 5001;

import * as socketio from "socket.io";

const io = new socketio.Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  console.log("listening to port", PORT);
});
