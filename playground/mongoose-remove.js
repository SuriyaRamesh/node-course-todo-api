const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5c0129d4b703f3f2399f97f2').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove({_id : '5c0129d4b703f3f2399f97f2'}).then((todo) => {
    console.log(todo);
});