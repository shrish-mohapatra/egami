const multer = require('multer');

const tempStorage = multer({
    storage: multer.MemoryStorage,
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
})

module.exports = tempStorage;