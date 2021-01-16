const bcrypt = require("bcrypt");
const keys = require("../../../config/keys");
const token = require("../../utilities/token");

const User = require("../models/user.model");

module.exports = {

    /*
        @desc    Check if user exists in db and return auth token
        @param   args: {email, password}
        @return  token: JWT with userID serialized
    */
    login: async(req, res) => {
        let {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).send({
                message: "Missing parameters."
            })
        }

        let user = await User.findOne({email});

        if(!user) {
            return res.status(400).send({
                message: "User with that email does not exist."
            })
        }

        // Compare encrypted passwords (w/ api key)
        const validated = await bcrypt.compare(
            password + keys.key,
            user.password
        );

        if(!validated) {
            return res.status(400).send({
                message: "Incorrect password entered."
            })
        }

        return res.status(200).send({
            token: token.createToken(user.id),
            user,
            message: `Succesfully logged in as ${user.email}.`
        })
    },


    /*
        @desc    Create new user, save to DB, and return auth token
        @param   args: {email, password}
        @return  token: JWT with userID serialized
    */
    signup: async(req, res) => {
        let {name, email, password} = req.body;

        if(!name || !email || !password) {
            return res.status(400).send({
                message: "Missing parameters."
            })
        }

        let user = await User.findOne({email});

        if(user) {
            return res.status(400).send({
                message: "User with that email already exists."
            })
        }

        // Create MongoDB instance and save to database
        password = await bcrypt.hash(password + keys.key, 10);
        user = await new User({name, email, password});
        user.save();

        return res.status(200).send({
            token: token.createToken(user.id),
            user,
            message: `Succesfully registered as ${user.email}.`
        })
    },

}