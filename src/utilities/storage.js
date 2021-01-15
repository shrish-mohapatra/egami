const { Storage } = require('@google-cloud/storage');
const keys = require('../../config/keys');

const storage = new Storage({
    keyFilename: keys.firebaseKeyDirectory
})

module.exports = storage;