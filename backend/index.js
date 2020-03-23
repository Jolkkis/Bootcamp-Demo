const express = require('express')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser');
const cars = require('./cars')
const app = express()
app.use(bodyParser.json());
const port = 4000

app.use(fileUpload());

app.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

  file.mv(`${__dirname}/images/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.get('/cars', (req, res) => 
    cars.getCars(req, res))
app.post('/cars', (req, res) => 
    cars.addCar(req, res))
app.delete('/cars/:id', (req, res) => 
    cars.removeCar(req, res))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))