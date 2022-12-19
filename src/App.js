import "./App.css";
import { useState } from "react";
import DogList from "./components/DogList";
import dogDataJson from "./data/dogData.json";

function App() {
  const [dogData, setDogData] = useState(dogDataJson);
  const name = "Panthers";

  // Event Handler that describes how to increment petCount
  const petDog = (id) => {
    console.log(`Petting Doge ${id}`)
    const newDogData = dogData.map(dog => {
      if (dog.id === id){
        return {...dog, petCount: dog.petCount + 1}
      } else {
        return dog;
      }
    });

    setDogData(newDogData);
  }

  const unregisterDog = id => {
    setDogData(dogData => dogData.filter(dog => {
      return dog.id !== id;
    }));
  }

  // reduce tangent
  const calcTotalPets = dogData => {
    return dogData.reduce((total, dog) => {
      return total + dog.petCount;
    }, 0);
  };

  const totalPetTally = calcTotalPets(dogData);

  return (
    <div className="App">
      Hello! It's Monday in {name} Roundtable!
      <h2>Total Number of Pets Across all Doggos: {totalPetTally} </h2>
      <DogList 
        dogData={dogData}
        onPetDog={petDog}
        onUnregister={unregisterDog}
      />
    </div>
  );
}

export default App;
