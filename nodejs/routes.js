let express = require('express');
let router = express.Router();

let routes = function(imageUploader, cloudVision, firebaseClient) {
    router.post('/upload',
        imageUploader.getMulter().single('image'),
        (req, res) => {

            let context = { };

            imageUploader.uploadFilePromise(req.file.path)
                .then(filename => imageUploader.getExternalUrl(filename))
                .then(publicUrl => {
                    context.imgPath = publicUrl;
                    context.date = Date.now();
                    return cloudVision.getLabelsForImage(publicUrl)
                })
                .then(annotations => {
                    context.tags = annotations;
                    if(context.tags && context.imgPath) {
                        firebaseClient.insertItem(context, (err) => {
                            if(err) {
                                console.log(err);
                            } else {
                                res.sendStatus(200);
                            }
                        });
                    }
                })
                .catch(error => console.log(error));
    });

    return router;
};



module.exports = routes;