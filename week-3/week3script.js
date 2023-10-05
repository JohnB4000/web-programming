function checkData() {
	var name = document.getElementById("user").value;
	if ( name.length < 2 || (/[^A-Za-z\s\-]/).test(name) ) {
		alert("Name should have 2 or more letters, hyphens, spaces");
		return false;
	}
	var age = document.getElementById("age").value;
	if ( age.length == 0 || (/[^0-9]/).test(age) ||
		age < 0 || age > 120 ) {
		alert("Please give age between 0 and 120");
		return false;
	}
	return true;
}


var map = L.map('map').setView([55.93, -3.30], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);