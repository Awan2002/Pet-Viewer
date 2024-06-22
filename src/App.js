import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Info from './Info';

function App() {
  const [data, setData] = useState([]);
  const [turnOn, setTurnOn] = useState(false);
  const [info, setInfo] = useState({
    image : "",
    name : "",
    breed : "",
    type : "",
    weight : "",
    color : ""
  });

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("https://petsview.free.beeceptor.com/pets");
       
        if (!response.ok) {
          console.log("data not found");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    } finally {
      console.log("waiting")
    }
  }, [])
  return (
    <div className="App">
      <h1>PET VIEWER</h1>
      <Dropdown data = {data} setInfo = {setInfo} setTurnOn = {setTurnOn}/>
      {turnOn && <Info info = {info}/>}
    </div>
  );
}

export default App;
