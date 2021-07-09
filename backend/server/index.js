// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// // Middlewares
// app.use(bodyParser.json());
// app.use(cors());

// const items = require("./routes/api/items")

// app.use('/api/items', items)

// if (process.env.NODE_ENV === 'production') {
//     // Static folder
//     app.use(express.static(__dirname + '/public/'));

//     // Handle SPA
//     app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
//   }

// const port = process.env.PORT || 3000;

// app.listen(port, () => console.log(`Server started on port ${port}`));

const express = require('express');
const app = express();
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://admin:admin@cluster0.gcpyf.mongodb.net/items?retryWrites=true&w=majority'
MongoClient.connect(connectionString, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
  const db = client.db('items')
  const carsCollection = db.collection('cars')
  const reviewsCollection = db.collection('reviews')

  const port = 3000
  app.use(cors({
    origin: "http://localhost:8080",
    credentials: true
  }))
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  app.listen(port, () => {
    console.log(`listening on:\n    localhost:${port}`);
  })

  // endpoints
  app.get('/', (req, res) => {
    carsCollection.find().toArray()
      .then(results => {
        res.send(results)
      })
      .catch(error => console.error(error))
    // ...
  })

  app.patch('/buy', (req, res) => {
    carsCollection.findOneAndUpdate(
      { carName: req.body.carName },
      {
        $set: {
          buyerName: req.body.buyerName,
          buyerAddress: req.body.buyerAddress
        }
      }
    ).then(result => {
      res.send(buyerName)
      res.redirect('/')
    })
      .catch(error => console.error(error))
  })

  app.post('/create', (req, res) => {
    carsCollection.insertOne(
      req.body
    )
      .then(result => console.log(result))
      .catch(error => console.error(error))
  })
  app.get('/get-reviews', (req, res) => {
    //console.log(req.query)
    reviewsCollection.find(
      { carName: req.query.carName },
    ).toArray()
      .then(results => {
        res.send(results)
        //console.log("x")
      })
      .catch(error => console.error(error))
  })
  app.post('/create-review', (req, res) => {
    reviewsCollection.insertOne(
      req.body
    )
      .then(result => console.log(result))
      .catch(error => console.error(error))
  })
  app.get('/get-bought-cars', (req, res) => {
    carsCollection.find({
      buyerName: { $regex: "[A-Za-z0-9]" }
    }).toArray()
      .then(results => {
        res.send(results)
      })
      .catch(error => console.error(error))
  })
  app.delete('/delete-car', (req, res) => {
    console.log(req.query)
    carsCollection.findOneAndDelete(
      {
        carName: req.query.carName
      }
    )
      .then(results => {
        console.log(results)
        res.redirect('/')
      })
      .catch(error => console.error(error))

  })

})