import React,{useState} from "react";
const API="http://localhost:6001/plants"

function NewPlantForm(setPlants,plants) {
  const[newPlant,setNewPlant]=useState({
    name:"",
    image:"",
    price:""
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    const config={
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
    body:JSON.stringify(newPlant)
    }
    fetch(API,config)
    .then(res=>res.json())
    .then(data=>{
      setPlants=({...plants, data})
    })
    }
  


  const handleChange=(e) =>{
const attributes = e.target.name
const value=e.target.value
 setNewPlant({...newPlant, [attributes]: value}) 
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input  value={newPlant.name}type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input value={newPlant.image} type="text" name="image" placeholder="Image URL"  onChange={handleChange}/>
        <input value={newPlant.price} type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
