import "./App.css";
import DogList from "./components/DogList";

const dogData = [
  {
    name: "Telfar",
    age: "1",
    cuteness: "1000000",
    breed: "French Bulldog"
  },
  {
    name: "Juicy",
    age: "3",
    cuteness: "500000",
    breed: "Pug"
  },
  {
    name: "Couture",
    age: "4",
    cuteness: "70000",
    breed: "Poodle"
  }
]

function App() {
  // const dogInfo = [{ name: "Frodo", age: "5", breed: "mutt" }];
  const name = "Panthers";
  return (
    <div className="App">
      Hello! It's Tuesday in {name} Roundtable!
      <DogList dogData={dogData}/>
    </div>
  );
}

export default App;
