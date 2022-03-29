const express = require('express');
const app = express(); 
const ejs = require('ejs');

const hostname='0.0.0.0';
const port = 5500 


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
  });

  app.listen(port, () => console.log(`This app is listening on http://${hostname}:${port}`));