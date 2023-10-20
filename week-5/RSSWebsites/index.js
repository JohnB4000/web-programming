async function fetchData(url) {
	try {
		const response = await fetch(url);
		const text = await response.text();

		let parser = new DOMParser();
		let xmlDoc = parser.parseFromString(text, "text/xml");

		const items = xmlDoc.querySelectorAll("item");
		return items
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

function createArticles(data, source) {
	$("#news-stories").empty();
	$("#source").empty();
	$("#source").append($("<h2>").text(source).fadeIn(300));
	data.forEach((story) => {
		let title = $(story).find('title').text();
		let description = $(story).find('description').text();
		let guid = $(story).find('guid').text();
		
		let article = $('<article></article>');
		article.append($("<h3>").text(title));
		article.append($("<p>").text(description));
		if (guid) article.append($("<a>").attr("href", guid).text("Read More"));
		article.hide();
		$("#news-stories").append(article);
		$(article).fadeIn(700);
	});
}


$(function () {
	const foxUrl = 'https://moxie.foxnews.com/google-publisher/latest.xml';
	const newYorkUrl = 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml';

	$("#fox-button").click(function (e) {
		fetchData(foxUrl).then((result) => {
			createArticles(result, "Fox News");
		}).catch((err) => {
			console.log(err);
			console.log("An error has occured here");
		});
	});

	$("#new-york-button").click(function (e) { 
		fetchData(newYorkUrl).then((result) => {
			createArticles(result, "New York Times");
		}).catch((err) => {
			console.log("An error has occured here");
		});
	});
});



