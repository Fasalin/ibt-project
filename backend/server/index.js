const express = require('express');
const app = express();
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { application } = require('express');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

const connectionString = 'mongodb+srv://admin:admin@cluster0.gcpyf.mongodb.net/items?retryWrites=true&w=majority'
MongoClient.connect(connectionString, { useUnifiedTopology: true }, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
  const db = client.db('items')
  const carsCollection = db.collection('cars')
  const reviewsCollection = db.collection('reviews')
  const usersCollection = db.collection('users')

  // //middleware
  // function authenticateToken(req, res, next) {
  //   if (req.url === '/api/register') {
  //     next();
  //     return;
  //   }
  //   const authHeader = req.headers['authorization']
  //   const jwt = require('jsonwebtoken');
  //   const token = authHeader && authHeader.split(' ')[1]

  //   if (token == null) return res.sendStatus(401)

  //   const secret = process.env.TOKEN_SECRET;
  //   jwt.verify(token, secret, (err) => {
  //     if (err) return res.sendStatus(403)
  //     //req.user = user
  //     next();

  //   })
  // }

  const port = 3000
  app.use(cors({
    origin: "http://localhost:8080",
    credentials: true
  }))
  // app.use(authenticateToken);
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  app.listen(port, () => {
    console.log(`listening on:\n    localhost:${port}`);
  })



  // endpoints


  app.post('/api/register', (req, res) => {

    //if usr not set or pass not set return bad req

    if (req.body.username === null || req.body.password === null) {
      return res.status(400).json({ 'error': 'Missing username or password.' });
    }

    //Check if uname is available if not return bad req, else crate user with
    usersCollection.findOne(
      { username: req.body.username },
    )
      .then((existingUser) => {
        if (existingUser !== null) {
          //Toupper
          return res.status(400).json({ 'error': 'User already exists.' });
        }

        usersCollection.insertOne(
          {
            "username": req.body.username,
            "password": req.body.password
          }
        )
          .then(result => console.log(result))
          .catch(error => console.error(error))

        const token = jwt.sign(
          req.body.username,
          process.env.TOKEN_SECRET)
        res.json(token);
      });

  });

  app.post('/api/login', (req, res) => {

    if (req.body.username === null || req.body.password === null) {
      return res.status(400).json({ 'error': 'Missing username or password.' });
    }
    let user = await usersCollection.findOne(
      {
        username: req.body.username,
        password: req.body.password
      },
    )

    if(user !== null){
      const token = jwt.sign(
        req.body.username,
        process.env.TOKEN_SECRET
      )
      res.cookie(
        'jwt', token, {
        httpOnly: true,
        secure: true,
        maxAge: 600000,
      }
      )
    }
    return res.status(400).json({ 'error': 'WRONG username or password.' });
    //res.json(token);
  });

  app.get('/test', (req, res) => {
    console.log("TEST");
    return res.status(400).json({ 'error': 'User already exists.' });
  });

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
      console.log(result)
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
    carsCollection.findOneAndDelete(
      {
        carName: req.query.carName
      }
    )
      .then(results => {
        console.log(results)
      })
      .catch(error => console.error(error))

  })

})