require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const apiKey = process.env.API_KEY;
const url = `http://www.omdbapi.com/?apikey=${apiKey}&`;

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello')
})

app.get('/movies/:title', async (req, res) => {
  const title = req.params.title;
  console.log(req.params);
  const apiUrl = `${url}s=${title}`;

  const response = await fetch(apiUrl);

  try {
    const json = await response.json();
    res.json(json);
  } catch (err) {
    console.log('Error: ', err);
  }
});

app.get('/movie/:id', async (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  const apiUrl = `${url}i=${id}&plot=full`;

  const response = await fetch(apiUrl);

  try {
    const json = await response.json();
    res.json(json);
  } catch (err) {
    console.log('Error: ', err);
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));
