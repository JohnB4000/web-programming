document.body.style.height = '20pt';

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js';
script.id = 'cookiebanner';
script.setAttribute('data-height', '40px');
script.setAttribute('data-position', 'top');
script.setAttribute('data-message', "We use cookies! Aren't they delicious!");
script.setAttribute('data-bg', 'navy');
script.setAttribute('data-fg', 'white');
document.head.appendChild(script); 

script.onload = function()
{
  console.log('loaded script');

//   console.log( initCookieConsent );
}
console.log('ready');

var mermaid = document.createElement('script');
mermaid.type = 'text/javascript';
mermaid.src = 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.4.0/mermaid.min.js';
mermaid.id = 'cookiebanner';
mermaid.setAttribute('data-fg', 'pink');
document.head.appendChild(mermaid); 

mermaid.onload = function()
{
  console.log('loaded script');

//   console.log( initCookieConsent );
}
console.log('ready');


var leaflet = document.createElement('script');
leaflet.type = 'text/javascript';
leaflet.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
leaflet.id = 'cookiebanner';
leaflet.setAttribute('data-fg', 'pink');
document.head.appendChild(leaflet); 

leaflet.onload = function()
{
  console.log('loaded script');

	var map = L.map('map').setView([55.93, -3.30], 12);
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
}
console.log('ready');

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