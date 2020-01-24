import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navigation";


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
      <NavBar/>
      
      <Card data={data}/>
    </div>
  );
}

export default App;
