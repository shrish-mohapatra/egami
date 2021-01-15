const mongoose = require('mongoose');

/*
    @desc    User MongoDB model for authentication
    @param   fields: {name, email, password}
*/
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema);