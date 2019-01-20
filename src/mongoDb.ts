import mongoose = require('mongoose');

mongoose.Promise = global.Promise;

export const connectToMongoDb = function connect() {
    return mongoose.connect('mongodb://127.0.0.1:27017');
}