// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server.');

    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text : "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });
    
    //deleteOne
    // db.collection('Todos').deleteOne({text : "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
    //     console.log(result);
    // });

    //deleteMany in Users collection
    // db.collection('Users').deleteMany({name : 'Suirya'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete in Users using ID
    db.collection('Users').findOneAndDelete({
        _id : new ObjectID('5bbb8fbe91ac581bb9148b6e')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    
    // client.close();
});