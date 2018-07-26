const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    context: {
        type: String,
        required: [true, 'Note is required'],
        minlength: [3, 'Note length must be greater than 3']
    }
}, {timestamps: true});

module.exports = mongoose.model('Note', NoteSchema);