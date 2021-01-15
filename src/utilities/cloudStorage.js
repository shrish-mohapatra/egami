const { Storage } = require('@google-cloud/storage');
const keys = require('../../config/keys');

const ROOT_URL = `https://storage.googleapis.com/${keys.bucketName.slice(5)}/`

const storage = new Storage({
    keyFilename: keys.firebaseKeyDirectory
})

module.exports = {
    storage,

    uploadImage: async(req, res, next) => {
        let upload = req.file;

        const filename = `${upload.originalname}`;
        const bucket = storage.bucket(keys.bucketName);
        const file = bucket.file(filename);

        const stream = file.createWriteStream({
            metadata: {contentType: upload.mimetype}
        })

        stream.on('error', (err) => {
            res.status(400).send({
                message: "Unable to create file stream."
            })
        })

        stream.on('finish', () => {
            return file.makePublic()
                .then(() => {
                    req.cloudURL = ROOT_URL + filename
                    next()
                })
        })

        stream.end(upload.buffer)
    },

    deleteImage: (cloudURL) => {
        let filename = cloudURL.slice(ROOT_URL.length)

        const bucket = storage.bucket(keys.bucketName);
        const file = bucket.file(filename);

        file.delete()
            .catch(err => console.log(err.message))
    }
}