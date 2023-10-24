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

function Cookie(name, value, days) {
    d=new Date();
    if ( days < 0 ) { 
        d.setTime(0); 
    } else { 
        d.setTime(d.getTime() + days * 24*60*60*1000); 
    }
    return name + "=\"" + value + "\"; Expires=\"" + d.toUTCString() + "\"" + "; Path=/";
}

function displayCookies() {
	var arr = getCookieNames();
	let s = ""
	for (var j = 0; j < arr.length; j++) {
		var val = getCookieValue(arr[j]);
		if ( val != null ) {
			s += arr[j] + " = " + unescape(val) + "<br>";
		}
		document.getElementById("currentCookies").innerHTML = s;
	}
}

function setCookie() {
	let name = document.getElementById("cookieKey").value;
	let value = document.getElementById("cookieVal").value;
	let c = Cookie(name, value, 1);
	document.cookie = c;
    console.log("Cookie set: " + c);
	displayCookies();
}

function deleteCookie() {
	let name = document.getElementById("cookieKey").value;
	let c = Cookie(name, "", -1);
	document.cookie = c;
	console.log("Cookie set: " + c);
	displayCookies();
}

function getCookieNames() {
    if ( document.cookie == "" ) return new Array();
    var c = document.cookie.split(";");
    var names = new Array(c.length);
    for (var i=0; i<c.length; i++)
        names[i] = c[i].substr(0, c[i].indexOf("="));
    return names;
}

function getCookieValue(name) {
    var cs = document.cookie.split(";");
    for (var k=0; k<cs.length; k++) {
        Nam = cs[k].substr(0, cs[k].indexOf("="));
        Val = cs[k].substr(cs[k].indexOf("=") + 1);
        if ( Nam == name )
            return unescape(Val);
    }
    return null;
}
function loadEverything() {
	displayWebStore();
	displayCookies();
}