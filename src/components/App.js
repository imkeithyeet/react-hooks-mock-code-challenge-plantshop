import React,{useState,useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
const API="http://localhost:6001/plants"

function App() {
  const[plants,setPlants]=useState([])
  const[searchQuery,setSearchQuery]=useState("")

useEffect(()=>{
  fetch(API)
  .then(r=>r.json())
  .then(plantData=>{
    setPlants(plantData)
  })
},[])
  

const filteredItems=plants.filter(plant=>{
  return plant.name.toLowerCase().includes(searchQuery.toLowerCase())

})
  return (
    <div className="app">
      <Header />
      <PlantPage  plants={filteredItems} setSearchQuery={setSearchQuery} setPlants={setPlants}/>
    </div>
  );
}

export default App;
