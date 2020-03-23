import React from "react";
import "./Cars.css";
import "./AddCar.css";
import axios from "axios";
//import FileUpload from "./FileUpload"
import Base64Convert from "./Base64Upload"

export default class Myynti extends React.Component {
    state = {
        make: "",
        model: "",
        price:"",
        location:"",
        owner:"",
        phone:"",
        file:""

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const inputName = target.name;

        this.setState({[inputName]: value});
        this.formRef = null
    }


 onSave(event){
     event.preventDefault()
     fetch('/api/cars', {
         method: "POST",
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(this.state)
     })
     .then(Response => Response.json())
 }

 state = {
     selectedFile: null
 }

 fileSelectedHandler = event => {
     this.setState({
         selectedFile: event.target.files[0]
     })
 }

 fileUploadHandler = () => {
     const fd = new FormData();
     fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
     axios.post('localhost:4000/cars', fd);
 }

    render() {
        return (
             <form className  = "colorAddCars" onSubmit={(event) => this.onSave(event)}>
                 <div className ="AddBox">
                 <label className = "" for="make">Merkki:</label>
             <select required name = "make" className = "dropdown" onChange={(event) => this.handleInputChange(event)}>
                <option value="" selected disabled hidden>Select make:</option>
                <option value ="ford">Ford</option>
                <option value ="honda">Honda</option>
                <option value ="skoda">Skoda</option>
                <option value ="alfa-romeo">Alfa Romeo</option>
                <option value ="bmw">BMW</option>
                <option value ="nissan">Nissan</option>
                <option value ="porsche">Porsche</option>
                <option value ="toyota">Toyota</option>
            </select>
             </div>

                 <div className ="AddBox">
             <label className = "nimi">Malli:  
             </label><input type="text" name ="model" onChange={(event) => this.handleInputChange(event)}/>
                </div>

                <div className ="AddBox">
             <label className = "nimi">Hinta:  
             </label><input type="text" name ="price" onChange={(event) => this.handleInputChange(event)}/>
                </div>

                <div className ="AddBox">
                 <label className = "" for="location">Maakunta:</label>
             <select required name = "location" className = "dropdown" onChange={(event) => this.handleInputChange(event)}>
                <option value="" selected disabled hidden>Select:</option>
                <option value ="ahvenanmaa">Ahvenanmaa</option>
                <option value ="etelä-karjala">Etelä-Karjala</option>
                <option value ="etelä-pohjanmaa">Etelä-Pohjanmaa</option>
                <option value ="etelä-savo">Etelä-Savo</option>
                <option value ="kanta-häme">Kanta-Häme</option>
                <option value ="keski-pohjanmaa">Keski-Pohjanmaa</option>
                <option value ="keski-suomi">Keski-Suomi</option>
                <option value ="Kymenlaakso">Kymenlaakso</option>
                <option value ="Lappi">Lappi</option>
                <option value ="pirkanmaa">Pirkanmaa</option>
                <option value ="pohjanmaa">Pohjanmaa</option>
                <option value ="pohjois-karjala">Pohjois-Karjala</option>
                <option value ="pohjois-pohjanmaa">Pohjois-Pohjanmaa</option>
                <option value ="pohjois-savo">Pohjois-Savo</option>
                <option value ="päijät-häme">Päijät-Häme</option>
                <option value ="satakunta">	Satakunta</option>
                <option value ="uusimaa">Uusimaa</option>
                <option value ="varsinais-suomi">Varsinais-Suomi</option>
            </select>
             </div>

             <div className ="AddBox">
             <label className = "nimi">Etu ja Sukunimi:  
             </label><input type="text" name ="owner" onChange={(event) => this.handleInputChange(event)}/>
                </div>

                <div className ="AddBox">
             <label className = "nimi">Puh:  
             </label><input type="text" name ="phone" onChange={(event) => this.handleInputChange(event)}/>
                </div>

                <div className='AddBox'>
                <h4 className='nimi'>Kuva:
                </h4> <Base64Convert />
                </div>

                <div className = "nappi">
                <button type = "submit" > Lisää </button>
                </div>

            </form>
          );
    }
}