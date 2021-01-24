const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema({
    name: String,
    age: String,
    gender: String,
    community: String,
    registrationDate: Date
});

mongoose.model('registration', registrationSchema);