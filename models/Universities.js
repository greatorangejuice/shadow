const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const universitiesSchema = new Schema({
    universityName: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('universities', universitiesSchema);
