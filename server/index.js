const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const port = 3000;
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

io.on("connection", (socket) => {
  socket.emit("Socket.io", "connected");
  console.log("Socket.io connection established");

  socket.on("message", (data) => {
    console.log("Recieved from client:", data.message);
  });
});

app.get("/connect", (req, res) => {
  res.json("Application endpoint established");
});

httpServer.listen({ port }, () =>
  console.log(`Server is running at port: ${port}`),
);
