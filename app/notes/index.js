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

module.exports = router;
