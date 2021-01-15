const storage = require('../../utilities/storage')
const keys = require('../../../config/keys')

module.exports = {
    /*
        @desc    Upload image
        @param   args: {filename}
        @return  status of upload
    */
    upload: async(args) => {
        const {filename} = args;

        try {
            await storage.bucket(keys.bucketName).upload(filename, {gzip: true,});
            return `Succesfully uploaded ${filename}`;
        } catch(error) {
            console.log(error.message)
            throw Error("Unable to upload file.");
        }
    },
}