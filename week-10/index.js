const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var path = require("path");

var toDoId = 0;
var todos = []

function deleteToDo(id) {
	for (let i = 0; i < todos.length; i++) {
		if (todos[i].id === id) {
			todos.splice(i, 1);
			break;
		}
	}
}

function updateState(id, state) {
	for (let i = 0; i < todos.length; i++) {
		if (todos[i].id === id) {
			todos[i].state = state;
			break;
		}
	}
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});


io.on("connection", (socket) => {
	socket.on("new-to-do", (msg) => {
		io.emit("add-new-to-do", msg, toDoId);
		todos.push({ id: toDoId++, name: msg, state: false })
	});
	socket.on("delete-to-do", (id) => {
		io.emit("delete-to-do-item", id);
		deleteToDo(id)
	});
	socket.on("check-to-do", (id, state) => {
		io.emit("check-to-do-item", id, state);
		updateState(id, state)
	});
});

server.listen(3000, () => {
	console.log("listening on *:3000");
});
