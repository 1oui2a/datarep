const express = require('express'); 
const app = express(); 
const port = 4000; 

const cors = require('cors'); 
app.use(cors()); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://louizamoran:Buster2012@cluster0.lb8cy.mongodb.net/');


const albumSchema = new mongoose.Schema({
  name: String, 
  genre: String,  
  artist: String,
  image: String 

});

const albumModel = mongoose.model('myAlbums', albumSchema);

app.post('/api/albums', async (req, res) => {
    console.log("Albums added: " + req.body.title); 
    const { name, genre, artist, image } = req.body; 
    const newAlbum = new albumModel({ name, genre, artist, image });
    newAlbum.save(); 
    res.send("Album Added!"); 
});

app.get('/api/albums', async (req, res) => {
  const albums = await albumModel.find({}); 
  res.json(albums); 
});

app.get('/api/album/:id', async (req, res) => {
  let album = await albumModel.findById({ _id: req.params.id });
  res.send(album);
});

app.put('/api/album/:id', async (req, res) => {
  let album = await albumModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(album);
});

app.delete('/api/album/:id', async (req, res) => {
  console.log('Deleting album with ID:', req.params.id);
  const album = await albumModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Album deleted successfully", album });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});
