import React, {
    useState,
    useEffect
} from "react";


import Car from "./Car";
import "./Cars.css";

export default function Osto(props) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/cars');
            res
                .json()
                .then(data => setCars(data))
                .catch(err => console.log(err));
        }

        fetchData();
    }, []);

    const onDelete = (id) => {
        fetch(`/api/cars/${id}`, {
                method: 'DELETE'
            })

            .then(deletedCar =>
                setCars(cars.filter(car => car.id !== id))
            );
    }




    const carElements = cars.map(
        carData => {
            return <Car key = {
                carData.id
            }
            make = {
                carData.make
            }
            onDelete = {
                    () => onDelete(carData.id)
                } >
                {
                    carData.model
                } </Car>
        }
    )


    console.log(carElements);

    return ( <React.Fragment >
        <div className = "cars" > {
            carElements
        } </div> </React.Fragment>
    );

}