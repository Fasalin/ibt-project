const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get items
router.get('/', async (req, res) => {
  const items = await loadPostsCollection();
  res.send(await items.find({}).toArray());
});

// Add item
router.post('/', async (req, res) => {
  const items = await loadPostsCollection();
  await items.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});

// Delete item
router.delete('/:id', async (req, res) => {
  const items = await loadPostsCollection();
  await items.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send({});
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://admin:admin@cluster0.gcpyf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  return client.db('items').collection('cars');
}

module.exports = router;