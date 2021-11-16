const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "must provide a name"],
        trim: true,
        maxlength: [20, 'Name can not be more then 20 chars long']
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', TaskSchema)