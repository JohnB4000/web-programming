const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var sqlite3 = require('sqlite3');
var db;

function createTables(newdb) {
	newdb.exec(`
	create table todolist (
		to_do_id int primary key auto_increment,
		to_do_name text not null,
		checked text,
	);
	`, ()  => {
		runQueries(newdb);
	});
}

function createDatabase() {
	var newdb = new sqlite3.Database('mcu.db', (err) => {
		if (err) {
			console.log("Getting error " + err);
			exit(1);
		}
		createTables(newdb);
	});
}

let db = new sqlite3.Database('./mcu.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err && err.code == "SQLITE_CANTOPEN") {
		createDatabase();
		return;
		} else if (err) {
			console.log("Getting error " + err);
			exit(1);
	}
});

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

var toDoId = 0;

io.on('connection', (socket) => {
	socket.on('new-to-do', (msg) => {
		db.run(`insert into todolist (to_do_name, checked) values (?, ?);`, msg, false);
		io.emit('add-new-to-do', msg, toDoId++);
	});
	socket.on('delete-to-do', (id) => {
		io.emit('delete-to-do-item', id);
		db.run(`delete from todolist where to_do_id = ?);`, id);

	});
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});