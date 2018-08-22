var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var NoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Note is required'],
        minlength: [3, 'Note length must be greater than 3']
    }
}, {timestamps: true});

var Note = mongoose.model('Note', NoteSchema);