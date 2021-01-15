const mongoose = require('mongoose');
const keys = require('../../config/keys');

module.exports = {
    connectAtlas: () => {
        mongoose.connect(keys.database, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
            .then(() => console.log("Connected to MongoDB Atlas."))
            .catch((error) => console.log(error))
    },
}