$(document).ready(function () {
	$("#testing").width("200px");
	$("#testing").height("200px");
	
	$("#testing").click(e => {
		let color = (Math.random()).toString(16);
		color = "#" + color.slice(2, 8)
		$("#testing").css("background-color", color);
	});;


});