// External modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

// Utilities
const { connectAtlas } = require("./src/utilities/database");
const { validate } = require('./src/utilities/token')

// REST API Routes
const imageRouter = require('./src/api/routes/image.routes')
const userRouter = require('./src/api/routes/user.routes')

const app = express();
const port = 5000;

// Setup middleware
app.options('*', cors())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validate)

app.use('/api/image', imageRouter);
app.use('/api/user', userRouter);

connectAtlas();

app.listen(port, () => {
    console.log("The server is running on port", port);
})