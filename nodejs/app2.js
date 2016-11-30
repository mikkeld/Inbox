let express = require('express');
let router = express.Router();

// let routes = function(imageUploader) {
//     router.post('/upload',
//         imageUploader.multer.single('image'),
//         (req, res) => {
//             console.log(res.file.path);
//         }
//     )
// };

// let routes = function() {
//     router.post('/upload', (req, res) => {
//         res.send({message: 'Hello World!!'});
//     });
// };
// const Multer = require("multer")
//
// let storage = Multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname)
//     }
// });
//
// let upload = Multer({ storage: storage });

let routes = function(imageUploader) {
    router.post('/upload',
        imageUploader.getMulter().single('image'),
        (req, res) => {
            console.log(req.file.path);
    });

    return router;
};



module.exports = routes;