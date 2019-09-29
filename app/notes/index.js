const { Router } = require('express');

const router = Router();

router.get('/', async (req,res) => {
  const client = req.app.client;
  const db = client.db('express-notes');
  const collection = db.collection('notes');
  
  const notes = await collection.find().toArray();
  
  res.render('notes/views/index', {
    notes
  });
});

router.get('/create', (req,res) => {
  res.render('notes/views/create');
});

router.post('/create', async (req,res) => {
  const note = req.body;
  const client = req.app.client;
  const db = client.db('express-notes');
  const collection = db.collection('notes');
  
  await collection.insertOne(note);
  res.redirect('/');
});


module.exports = router;
