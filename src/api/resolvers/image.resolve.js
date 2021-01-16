const Image = require("../models/image.model");
const User = require("../models/user.model");
const { deleteImage } = require("../../utilities/cloudStorage")

module.exports = {

    /*
        @desc    Create and upload image
        @param   args: {upload, title, description*, tags*, public*}  *optional
        @return  new mongoDB image instance
    */
    create: async(req, res) => {
        const { title, description, tags, public } = req.body;
        const { userID, cloudURL } = req;

        let image = new Image({
            userID,
            cloudURL,
            title,
            tags,
            description,
            public            
        });

        await image.save();

        return res.status(200).send({
            message: "File uploaded.",
            image
        })
    },
    
    /*
        @desc    Get images based on query params
        @param   args: {title*, tags*, private*}
        @return  mongoDB image instances
    */
    get: async(req, res) => {
        const { title, tags, myImages } = req.body;

        let options = {
            public: true
        }

        if(title) {
            options.title = {
                "$regex": title,
                "$options": "i"
            }
        }

        if(tags) {
            options.tags = {
                "$all": tags
            }
        }
        
        if(myImages) {
            delete options.public
            options.userID = req.userID
        }

        let query = await Image.find(options);
        let results = []

        for(let i=0; i<query.length; i++) {
            let user = await User.findById(query[i].userID)
            results.push({
                ...query[i]._doc,
                author: user.name
            })
        }

        return res.status(200).send({results})
    },


    /*
        @desc    Edit image w/ imageID
        @param   args: {imageID, title*, tags*, public*}
        @return  updated mongoDB image instances
    */
    edit: async(req, res) => {
        const { imageID, title, tags, public } = req.body;

        let image;

        try {
            image = await Image.findById(imageID);
        } catch(error) {
            return res.status(400).send({
                message: "Invalid imageID"
            })
        }
        
        if(image.userID != req.userID) {
            return res.status(400).send({
                message: "Sorry, you do not have access."
            })
        }

        if(title) image.title = title;
        if(tags) image.tags = tags;
        if(public) image.public = public;

        await image.save()

        return res.status(200).send({
            message: "Succesfully updated image.",
            image
        })
    },

    /*
        @desc    Remove image w/ imageID
        @param   args: {imageID}
        @return  deletion status
    */
    remove: async(req, res) => {
        const { imageID } = req.body;

        let image;

        try {
            image = await Image.findById(imageID);
        } catch(error) {
            return res.status(400).send({
                message: "Invalid imageID"
            });
        }

        if(image.userID != req.userID) {
            return res.status(400).send({
                message: "Sorry, you do not have access."
            });
        }

        await Image.findByIdAndDelete(imageID);
        deleteImage(image.cloudURL);

        return res.status(200).send({
            message: "Succesfully deleted image."
        })
    }
}