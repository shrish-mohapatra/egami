const mongoose = require('mongoose');

/*
    @desc    Image MongoDB model for meta data
    @param   fields: {userID, source, title, description, public, tags}
*/
const imageSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    cloudURL: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    description: {
        type: String,
        required: false
    },
    public: {
        type: Boolean,
        default: true
    },
})

module.exports = mongoose.model('image', imageSchema);