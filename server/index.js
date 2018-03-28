const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
});

app.get('/api/heroes', controller.getHeroes);
app.get('/api/awesome_heroes', controller.getAwesomeHeroes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
