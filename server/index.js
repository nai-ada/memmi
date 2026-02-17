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

function generateRoomId() {
  return Math.floor(Math.random() * 10000);
}

app.use(cors());

io.on("connection", (socket) => {
  const roomId = generateRoomId();

  socket.emit("Socket.io", "connected");
  console.log("Socket.io connection established");

  socket.on("createRoom", () => {
    socket.join(`Room:${roomId}`);
    socket.emit("roomCreated", roomId);
    console.log(`Room ${roomId} created`);
  });

  socket.on("joinRoom", (roomId) => {
    socket.join(`Room:${roomId}`);
    socket.emit("roomJoined", roomId);
    socket.to(`Room:${roomId}`).emit("userJoined", socket.id);
    console.log(`User joined room ${roomId}`);
  });

  socket.on("message", (data) => {
    console.log("Recieved from client:", data.message);
    const rooms = Array.from(socket.rooms);
    rooms.forEach((room) => {
      if (room !== socket.id) {
        io.to(room).emit("message", data);
      }
    });
  });
});

app.get("/connect", (req, res) => {
  res.json("Application endpoint established");
});

httpServer.listen({ port }, () =>
  console.log(`Server is running at port: ${port}`),
);
