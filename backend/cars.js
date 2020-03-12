const carsList = [
    {"id": 1, "make": "ford", "model": "Mustang"},
    {"id": 2, "make": "honda", "model": "Civic"},
    {"id": 3, "make": "ford", "model": "Octavia"},
    {"id": 4, "make": "honda", "model": "Accord"},
    {"id": 5, "make": "skoda", "model": "Fabia"},
    {"id": 6, "make": "ford", "model": "T"},
    {"id": 7, "make": "volvo", "model": "V40"}
  ];
const getCars= (req, res) =>
res.send(carsList);

const addCar = (req, res) => {
    const car = req.body;
    car.id = carsList.slice(-1)[0].id + 1;
    carsList.push(car);
    res.send(car);
}

const removeCar = (req, res) => {
    const id = req.params.id;
    console.log("ID", typeof id, typeof carsList[0].id);
    const index = carsList.findIndex(car => car.id === parseInt(id));
    if(index > -1) {
    const removedCar = carsList.splice(index, 1);
    res.send(removedCar);
    } else {
        res.status(404).send('Not found');
    }
}

module.exports = {
    getCars,
    addCar,
    removeCar
  };