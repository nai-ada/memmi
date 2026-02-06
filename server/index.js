const express = require('express')
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express()
const port = 3000
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log('Socket.io connection established')
});

app.get('/', (req, res) => {
  res.send('Endpoint established')
})
 
httpServer.listen({port}, () => console.log(`Server is running at port: ${port}`));