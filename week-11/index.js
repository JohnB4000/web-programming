const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var path = require("path");
var fs = require("fs");

const filePath = "todos.csv";
function readToDos() {
	try {
		const data = fs.readFileSync(filePath, "utf8");
		const rows = data.split("\n");

		const header = rows.shift();

		const objectsArray = rows.map((row) => {
			const [id, name, state] = row.split(",");
			return { id, name, state: state === "true" };
		});

		return objectsArray;
	} catch (error) {
		console.error("Error reading CSV file:", error.message);
		return [];
	}
}

let toDos = readToDos();
let toDoCount;
try {
	toDoCount = toDos[toDos.length - 1].id;
} catch (error) {
	toDoCount = 0;
}

function writeToDos(data) {
	const csvContent = [
		"id,name,state",
		...data.map((entry) => `${entry.id},${entry.name},${entry.state}`),
	].join("\n");

	try {
		fs.writeFileSync(filePath, csvContent, "utf8");
	} catch (error) {
		console.error("Error writing to CSV file:", error.message);
	}
}

function deleteToDo(data, id) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].id === id) {
			data.splice(i, 1);
			break;
		}
	}
}

function updateState(data, id, state) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].id === id) {
			data[i].state = state;
			break;
		}
	}
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	toDos.forEach((element) => {
		io.emit("add-new-to-do", element);
	});

	socket.on("new-to-do", (msg, state) => {
		let newToDo = { id: toDoCount++, name: msg, state: state }
		io.emit("add-new-to-do", newToDo);
		toDos.push(newToDo);
		writeToDos(toDos);
	});
	socket.on("delete-to-do", (id) => {
		io.emit("delete-to-do-item", id);
		deleteToDo(toDos, id);
		writeToDos(toDos);
	});
	socket.on("check-to-do", (id, state) => {
		io.emit("check-to-do-item", id, state);
		updateState(toDos, id, state);
		writeToDos(toDos);
	});
});

server.listen(3000, () => {
	console.log("listening on *:3000");
});
