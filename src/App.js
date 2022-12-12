import logo from "./logo.svg";
import "./App.css";
import Dog from "./components/Dog.js";
import DogList from "./components/DogList";

function App() {
  return (
    <div className='App'>
      <DogList />
      <Dog />
    </div>
  );
}

export default App;
