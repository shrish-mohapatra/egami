const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const BYPASS_ROUTES = ['login', 'signup']

/*
    @desc    Create JWT with userID serialized
    @param   userID
    @return  token: JWT w/ expiry of 1h
*/
const createToken = (userID) => (
    jwt.sign(
        { userID, date: Date.now()},
        keys.key,
        {expiresIn: "1h"}
    )
)

/*
    @desc    Validate user authorization
    @param   (req, res, next)
*/
const validate = (req, res, next) => {
    try {        
        if(!requires_auth(req)) return next();
    
        // Check for token
        const token = req.headers.token;
        if(!token) return res.status(400).json({
            message: "Missing token."
        })

        // Refresh token
        const decoded = jwt.verify(token, keys.key);
        const newToken = createToken(decoded.userID);

        req.userID = decoded.userID;
        res.append('token', newToken);
        next();        
    } catch(error) {
        return res.status(400).json({message: error.message})
    }
}

/*
    @desc    Check if request requires token authentication
    @param   (req): express request object
    @return  boolean
*/
const requires_auth = (req) => {
    const query = req.url.toString();

    for(route in BYPASS_ROUTES) {
        if(query.includes(BYPASS_ROUTES[route])) return false;
    }
    return true;
}

module.exports = {
    createToken,
    validate
}