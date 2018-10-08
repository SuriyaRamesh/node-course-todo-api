// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server.');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : '5bbba93ec008240fcc4e604b'
    // }, {
    //     $set : {
    //         completed : true
    //     }
    // }, {
    //     returnOriginal : false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5bbb8ccefad9a01afa3da6be')
    }, {
        $set : {
            name : 'Kirithish'
        },
        $inc : {
            age : 2
        }
    }, {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });
    
    // client.close();
});