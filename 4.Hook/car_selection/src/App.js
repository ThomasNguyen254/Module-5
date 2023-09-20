import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import * as events from "events";

function App() {
    const carList = ['Car A', 'Car B', 'Car C']
    const colorList = ['Red', 'Blue', 'Green']

    const [selectedCar, setSelectedCar] = useState({
        car: carList [0],
        color: colorList[0]
    })

    const handleCarChange = (event) => {
        const selectCarName = event.target.value;
        setSelectedCar((prevState) => (
            {
                ...prevState,
                car: selectCarName,
            }
        ))
    }

    const handleColorChange = (event) => {
        const selectColor = event.target.value;
        setSelectedCar((prevState) => (
            {
                ...prevState,
                color: selectColor
            }
        ))
    }

    return (
        <div className="App">
            <label>Select a car</label>
            <select value={selectedCar.car} onChange={handleCarChange}>
                {carList.map((car,index) => (
                    <option key={index} value={car}>
                        {car}
                    </option>
                ))}
            </select>

            <label>Select a color</label>
            <select value={selectedCar.color} onChange={handleColorChange}>
                {colorList.map((color,index) => (
                    <option key={index} value={color}>
                        {color}
                    </option>
                    ))}
            </select>

            <p>You selected a {selectedCar.car} and {selectedCar.color}</p>

        </div>
    );
}

export default App;
