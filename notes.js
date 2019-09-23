const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

(
  async () => {
    await client.connect();
    
    console.log('Connected');
    
    const db = client.db('notes');
    const collection = db.collection('notes');
    
    // create
    // const result = await collection.insertOne({ title: 'Hello World' });
    // console.log(result, 'result');

    // read
    // const notes = await collection.find().toArray();
    // console.log(notes, 'notes');
    
    // read one
    // const note = await collection.findOne();
    // console.log(note, 'note');
    
    // update
    // const result = await collection.updateMany({ title: 'Hello World' }, { $set: { title: 'Hello World!' } });
    // console.log(result, 'result');
    
    // read again
    // const result = await collection.find().toArray();
    // console.log(result, 'result')
    
    // delete
    // const result = await collection.deleteOne({ title: 'Hello World!' });
    // console.log(result, 'result');
    
    // read again
    // const result = await collection.find().toArray();
    // console.log(result);

    // 20:26
    
    client.close();
  }
)();
