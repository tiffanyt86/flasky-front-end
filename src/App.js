import logo from "./logo.svg";
import "./App.css";
import Dog from "./components/Dog.js";
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
  }
];

const specialDog = dogData[0];

function App() {
  return (
    <div className='App'>
      <DogList />
      <Dog
        name={specialDog.name}
        favoriteToy={specialDog.favoriteToy}
        chipNumber={specialDog.chipNumber}
      />
    </div>
  );
}

export default App;
