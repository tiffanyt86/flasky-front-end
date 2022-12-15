import "./App.css";
import { useState } from "react";
import DogList from "./components/DogList";

const dogData = [
  {
    name: "Wishbone",
    favoriteToy: "Squeaker",
    chipNumber: "82373",
  },
  {
    name: "Appa",
    favoriteToy: "Ball",
    chipNumber: "29238",
  },
  {
    name: "Jimminy",
    favoriteToy: "Bone",
    chipNumber: "72902",
  },
];

function App() {
  const [petCount, setPetCount] = useState(0);

  // const incrementPetCount = (_) => {
  //   setPetCount((prevCount) => prevCount + 1);
  // };

  return (
    <div className='App'>
      <h2>We have pet dogs {petCount} times</h2>
      <button onClick={() => setPetCount((prevCount) => prevCount + 1)}>
        PET DOG
      </button>
      <DogList dogs={dogData} />
    </div>
  );
}

export default App;
