import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [data, setdata]= useState([]);
  

  useEffect(()=> {
    axios.get(`https://api.nasa.gov/planetary/apod?date=${"2020-01-22"}&api_key=o5SHwwrXZXk6O4JRf5m4dAosTNLzeum3aMJ3ylmt`)
    .then(response =>{
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
