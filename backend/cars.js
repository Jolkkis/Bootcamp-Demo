const carsList = [{
        "id": 1,
        "make": "ford",
        "model": "Mustang",
        "price": "500Euroa",
        "location": "ahvenanmaa",
        "owner": "Erkki Alatalo",
        "phone": "04400000000"
    },
];
const getCars = (req, res) =>
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
    if (index > -1) {
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