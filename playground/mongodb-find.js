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

    // Listing all docs
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todo', err);
    // });

    //Listing inCompleted task
    // db.collection('Todos').find({completed : false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todo', err);
    // });

    //Listing by ID
    // db.collection('Todos').find({
    //     _id : new ObjectID('5bbb9438c008240fcc4e5d9f')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todo', err);
    // });

    // To count no of docs
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todo', err);
    // });

    db.collection('Users').find({name : 'Suirya'}).toArray().then((docs) => {
        // console.log(`Todos count : ${count}`);
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todo', err);
    });
    
    // client.close();
});