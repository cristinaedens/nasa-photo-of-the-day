import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";

function App() {

  const [data, setData]= useState([]);
  

  useEffect(()=> {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=o5SHwwrXZXk6O4JRf5m4dAosTNLzeum3aMJ3ylmt`)
    .then(response =>{
      // console.log(response)
      setData(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])
  return (
    <div className="App">
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
      <Card data={data}/>
    </div>
  );
}

export default App;
