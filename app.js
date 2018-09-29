const express = require('express');
const app = express()
const bodyParser = require('body-parser');
// Initialize the map

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// allow to parse body of request
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  // set to default position athis
  res.render('index', {position: [48.814003, -0.527254], text: "Bienvenue à Athis", error: null});
})

app.post('/', function (req, res) {
  const city = req.body.city;
  if (city == 'athis'){
    res.render('index', {position: [48.814003, -0.527254], text: "Bienvenue à Athis", error: null});
  }
  else {
    res.render('index', {position: [48.885691, 2.311464], text: "Bienvenue à Paris", error: null});
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
