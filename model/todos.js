const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema( {
    title: {
        type: String,
        trim: true,
        required: [true, 'Please give a title to the task']
    },
    priority: {
        type: Number,
        required: [true, 'Please add the title']
    },
    completed: {
        type: Boolean,
        required: [true, 'Please add the title']
    }
})


module.exports = mongoose.model('Todos', TodosSchema);
