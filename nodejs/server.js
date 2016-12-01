const express = require("express"), bodyParser = require("body-parser"), cors = require("cors");
let app = express();
let routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let imageUploader = require("./image-upload");
let cloudVision = require("./vision");
let firebaseClient = require("./vendors/firebase");

app.use('/', routes(new imageUploader(), new cloudVision(), new firebaseClient('photos/Imf4nFal01MofFYqOe9I8LcfhX22')));

const port = 8000;

app.listen(port, () => {
    console.log('listening on', port);
});
