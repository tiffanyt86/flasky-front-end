import "./App.css";
import { useState } from "react";
import DogList from "./components/DogList";

const dogDataList = [
  {
    id: 1,
    petCount: 5,
    name: "Wishbone",
    favoriteToy: "Squeaker",
    chipNumber: "82373",
  },
  {
    id: 2,
    petCount: 6,
    name: "Appa",
    favoriteToy: "Ball",
    chipNumber: "29238",
  },
  {
    id: 3,
    petCount: 3,
    name: "Jimminy",
    favoriteToy: "Bone",
    chipNumber: "72902",
  },
];

function App() {
  const [dogData, setDogData] = useState(dogDataList);
  const updatePetCount = (dogId) => {
    const newDogData = [...dogData];
    for (const dog of newDogData) {
      if (dog.id === dogId) {
        dog.petCount++;
      }
    }
    setDogData(newDogData);
  };
  return (
    <div className='App'>
      <DogList dogs={dogData} onUpdatePetCount={updatePetCount} />
    </div>
  );
}

export default App;
