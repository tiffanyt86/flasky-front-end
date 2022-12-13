import "./App.css";
import DogList from "./components/DogList";

function App() {
  // const dogInfo = [{ name: "Frodo", age: "5", breed: "mutt" }];
  const name = "Panthers";
  return (
    <div className="App">
      Hello! It's Tuesday in {name} Roundtable!
      <DogList />
    </div>
  );
}

export default App;
