import express from "express";
import cors from "cors";
import http from "http";
import "./config/connection.js";
import * as socketio from "socket.io";
import { uRouter } from "./routes/userRoutes.js";

const PORT = 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/user", uRouter);

const server = http.createServer((req, res) => {
  console.log(`request: ${req.url}`);
  app(req, res);
});

// creating a socket server
const io = new socketio.Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  console.log("listening to port", PORT);
});
