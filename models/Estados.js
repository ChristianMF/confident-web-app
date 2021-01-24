const mongoose = require('mongoose');
const { Schema } = mongoose;

const estadosSchema = new Schema({
    estado: String,
    link: String,
    description: String
});

mongoose.model('estados', estadosSchema);