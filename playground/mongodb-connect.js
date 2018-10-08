// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name : 'Suriya', age : 21};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server.');
    }
    console.log('Connected to MongoDB Server.');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed : false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name : 'Suirya',
    //     age : 21,
    //     location : 'Chennai'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     // console.log(JSON.stringify(result.ops, undefined, 2));

    //     // console.log(result.ops[0]._id);
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    // db.close(); for v2

    //For v3
    client.close();
});