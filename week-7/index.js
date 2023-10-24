function displayWebStore() {
    db = localStorage;
    
	if (window.location.href.indexOf("?session") != -1)
        db = sessionStorage;
    
	if (typeof(db) == "undefined") {
        alert("no web storage available");
        return;
    }

    var s = "";
    for (var i = 0; i < db.length; i++) {
        var key = db.key(i);
        s += key + " = " + db.getItem(key) + "<br/>";
    }
    document.getElementById("WSData").innerHTML = s;
}

function updateWebStore() {
    var key = document.getElementById("key").value;
    if (key != "")
        db[key] = document.getElementById("val").value;
    displayWebStore();
}

function clearWebStore() {
    db.clear();
    displayWebStore();
}