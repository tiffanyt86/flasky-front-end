import CatList from './components/CatList';

import './App.css';

const catData = [
  {
    name: "Ubik",
    caretaker: "Maria",
    color: "grey",
    personality: "wild child",
  },
  {
    name: "Pepper",
    caretaker: "Mark",
    color: "black",
    personality: "spicy",
  },
  {
    name: "Binx",
    caretaker: "Susan",
    color: "tuxedo",
    personality: "feral",
  },
];

function App() {
  return (
    <div className="App">
      <CatList catData={catData} />
    </div>
  );
}

export default App;
