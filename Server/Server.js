const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./Helpers/CreateRouter.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('CaH');

    const nsfwCardsCollection = db.collection('nsfwcards');
    const nsfwCardsRouter = createRouter(nsfwCardsCollection);
    app.use('/api/nsfwCards', nsfwCardsRouter);

    const sfwCardsCollection = db.collection('sfwcards');
    const sfwCardsRouter = createRouter(sfwCardsCollection);
    app.use('/api/sfwCards', sfwCardsRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});