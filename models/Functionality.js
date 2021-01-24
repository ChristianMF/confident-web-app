const mongoose = require('mongoose');
const { Schema } = mongoose;

const functionalitySchema = new Schema({
    functionality: String,
    registrationDate: Date
});

mongoose.model('functionality', functionalitySchema);