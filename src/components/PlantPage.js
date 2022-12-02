import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setSearchQuery, setPlants}) {
  return (
    <main>
      <NewPlantForm  setPlants={setPlants} plants={plants}/>
      <Search setSearchQuery={setSearchQuery} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
