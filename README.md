# web-programming
Repository for F28WP Web Programming

## Week 1
The task was to redesign the zen garden website. This was an optional task for people who had not done much HTML/CSS before. I have copied the code into my repository. However I wasn't able to redesign it as I ran out of time and was busy for the rest of the week. Also I already have good knowledge of HTML/CSS so didn't mind missing out on that task.

## Week 2
Exercises for this week are hosted on my GitHub Pages [JohnB4000.github.io](JohnB4000.github.io) and are copied here. The task was to play around with GitHub Pages which I was able to do.

## Week 3
This week was experimenting with JavaScript Scripts hosted via CDNJS. I have included the cookie banner, mermaid, leaflet and tailwind. There are many other scripts on CDNJS so may return and set up a couple more. I also branched this week to overhaul the code as the example provided in the lab sheet used pure JS to load and use the script whereas it made more sense to import the scripts in the HTML directly and only use JS file with setting up the leaflet where it required it. I also tried out an example of form validation from the slides.

## Week 4
This week's tasks are related to JQuery, AJAX & JSON. I completed the lab task which was using XMLHttpRequest(), $.ajax, load and fetch to play around with fetching XML and JSON over the web. I also played around with JQuery to gain a better understanding of it.

## Week 5
This week is about XML and RSS. The task was to play around with RSS feeds and parse the XML response. I've used two RSS feeds so far Fox News from the example and New York Times and parsed the response into the HTML. 

## Week 6
I also decided to make an improved version that is seperate for week 6. It has two buttons that select the source either Fox News or New York Times and it then fades in replacing the previous stories. I used JQuery to implement the RSS parser instead of pure JS like the example. I also styled the website making the articles appear in a grid layout with 4 stories to a row to make it easier to read. I also extended the articles so it displays the attached image if it exists.

## Week 7
This week we explored storage in the form of web storage, cookie and session cookies. I implemented the web storage example from the notes. I then created a cookie set and delete form similar to the web storage but for cookies based off the notes but extended to allow the user to set the name as well as the value of the cookie and then fetch and display any cookies stored for that domain. However, because I used VS Code's live server hosted on localhost it requires the domain to be removed from the cookie parameters.

## Week 8
This week was about Node.js and experimenting with its features. This incudes express.js, pug templates routing and socket.io. I created implemented basic routing with express, then improved it with the router handler and then played around with pug templates. I also implented the chatroom server to explorer how it works and may add extra features.

## Week 9
This week since there were no lectures or labs I continued experimenting with Node.js, especially socket.io. I build a basic to do app. When someone creates a to do item it sends it to the server which alerts others connected to create a new to do with a id. It also allows you to delete to do items with a delete button. This also send the update to the server and its connected clients to also remove the to do item.

## Week 10
I decided to extend the to do app by firstly give the page some styling with css. I then added a checkbox for each to do item that updated over socket io. I then added an array to store the to dos so when people connect after to dos have been created they can see it to.

## Week 11
I continued to work on the to do app this week. I added file system support so it writes the to dos to a csv file. This allows to dos to persist even if the server cycles. I also changed the way new to dos are sent over the socket io to use the object since I was storing it anyway instead of the individual variables.