const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

(
  async () => {
    await client.connect();
    
    console.log('Connected');
    
    const db = client.db('notes');
    const collection = db.collection('notes');
    
    // create
    const result = await collection.insertOne({ title: 'Hello World' });
    console.log(result, 'result');
  }
)();
