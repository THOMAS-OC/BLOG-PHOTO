const mongoose = require('mongoose');
const schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/SITE_PHOTO')

const uploadSchema = schema({
    urlFile: String,
    urlFileCompressed: String,
    alt: String,
    categorie: String,
    ordre: Number
})

module.exports.photoUpload = mongoose.model('photo', uploadSchema)
