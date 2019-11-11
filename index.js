const express = require("express");
const socket = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("./public"));
let server = app.listen(8888, (req, res) => {
  console.log("Listening to 8888");
});

const io = socket(server);
io.on("connection", socket => {
  console.log(socket.id);
  socket.on("updSv", data => {
    console.log(data.code);
    let abc = data.code;
    socket.broadcast.emit("updCl", { abc });
  });
});
