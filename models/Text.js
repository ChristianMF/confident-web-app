const mongoose = require('mongoose');
const { Schema } = mongoose;

const textSchema = new Schema({
    id_user: String,
    text: String,
    date: Date
});

mongoose.model('text', textSchema);