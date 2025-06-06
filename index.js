const express = require('express');
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");;
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + "/style.css");;
});

app.get('/onboard.html', (req, res) => {
    res.sendFile(__dirname + "/onboard.html");;
 });

 app.get('/search.html', (req, res) => {
    res.sendFile(__dirname + "/search.html");;
 });

 app.get("/manifest.json", (req, res) => {
    res.sendFile(__dirname + "/manifest.json");;
 });

 app.get('/seemore.html', (req, res) => {
   res.sendFile(__dirname + "/seemore.html");;
 });

 app.get('/app', (req, res) => {
   res.sendFile(__dirname + "/app.html");;
});

 app.get('/search-results.html', (req, res) => {
   res.sendFile(__dirname + "/search-results.html");;
 });

 app.get('/info.html', (req, res) => {
   res.sendFile(__dirname + "/info.html");;
 });

 app.get('/lyrics.html', (req, res) => {
    res.sendFile(__dirname + "/lyrics.html");;
 });

 app.get('/np.html', (req, res) => {
   res.sendFile(__dirname + "/np.html");;
});

 app.get('/horse.mp3', (req, res) => {
    res.sendFile(__dirname + "/horse.mp3");;
 });

 app.get('/audio.mp3', (req, res) => {
   res.sendFile(__dirname + "/audio.mp3");;
});

 app.get('/favicon.png', (req, res) => {
    res.sendFile(__dirname + "/favicon.png");;
 });

 app.get('/fallback.svg', (req, res) => {
    res.sendFile(__dirname + "/fallback.svg");;
 });

 app.get('/folder.svg', (req, res) => {
   res.sendFile(__dirname + "/folder.svg");;
});

 app.use((req, res, next) => {
    res.sendFile(__dirname + "/error.html");;
 });
 

// Start the server
app.listen(3000);