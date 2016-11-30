const Multer = require('multer'), gcloudStorage = require('./vendors/gcloud');

class ImageUploader {

    constructor() {
        this.bucket = gcloudStorage;
    }

    uploadFile(req, res, next) {
        if(!req.file) {
            next();
        }

        this.bucket.upload(req.file.path, (err, file) => {
            if(err) throw new Error(err);
            req.file.publicUrl = this.getExternalUrl(req.file.name)
        })
    }

    uploadFilePromise(file) {
        return new Promise((resolve, reject) => {
            // this.bucket.upload(file.path, (err, file) => {
            //     if(err) reject(err);
            //     resolve(this.getExternalUrl(file.name));
            // })
            resolve(file.path);
        })
    }

    getExternalUrl(filename) {
        this.bucket.file(filename).getSignedUrl({
            action: 'read',
            expires: '03-17-2025'
        }, (err, url) => {
            if (err) throw new Error(err);
            return url;
        })
    }

    storage() {
        return Multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'uploads/')
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname)
            }
        });
    }

    getMulter() {
        return require('multer')({ storage: this.storage() });
    }
}

module.exports = ImageUploader;