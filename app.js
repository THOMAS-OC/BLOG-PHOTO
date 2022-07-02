const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv')
const db = require('./model/index')
dotenv.config()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


// ROUTE PAGE D'ACCUEIL
app.get("/", (req, res) => {
    res.redirect("/home")
})

// ROUTE PAGE D'ACCUEIL
app.get("/home", (req, res) => {
    res.render("home.ejs")
})

// ROUTE PAGE ALBUM PHOTO
app.get("/album/:name", (req, res) => {
    db.photoUpload.find({categorie : req.params.name}, (err, docs)=>{
        images = docs
        console.log(images);
        res.render("album.ejs", {images, title:req.params.name})
    })
})

// ROUTE PAGE CONTACT
app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})

// ROUTE POST UPLOAD EMAIL
app.post("/contact/sendEmail", (req, res) => {
    res.redirect("home.ejs")
})

// Route formulaire d'upload
app.get("/upload", (req, res) => {
    res.render("upload.ejs")
})

// Route POST upload photo
app.post("/upload/send", (req, res) => {

    let authorize = false

    if (req.body.secretCode == process.env.CODE){
        authorize = true
        console.log('Enregistrement en BDD');
        db.photoUpload.create({
            urlFile: req.body.urlFile,
            urlFileCompressed: req.body.urlFileCompressed,
            alt: req.body.alt,
            categorie: req.body['categorie-select']
        })
    }
    else {
        console.log('Intrusion');

    }
    res.redirect("/")
})

app.listen(3000, () => {
    console.log("Serveur lancé");
})