import "./App.css";
import Autocomplete from "./Autocomplete";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [countriesList, setCountries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1234/countries").then((data) => {
      setCountries(data.data);
    });
  }, []);
  return (
    <div className="App">
      <Autocomplete options={countriesList}></Autocomplete>
    </div>
  );
}

export default App;
