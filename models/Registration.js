const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema({
    name: String,
    city: String,
    email: String,
    registerDate: Date
});

mongoose.model('registration', registrationSchema);