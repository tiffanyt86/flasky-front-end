import { useState } from 'react';
import CatList from './components/CatList';

import './App.css';

const catDataList = [
  {
    name: "Ubik",
    id: 1, 
    caretaker: "Maria",
    color: "grey",
    personality: "wild child",
    petCount: 3, 
  },
  {
    name: "Pepper",
    id: 2,
    caretaker: "Mark",
    color: "black",
    personality: "spicy",
    petCount: 2,
  },
  {
    name: "Binx",
    id: 3,
    caretaker: "Susan",
    color: "tuxedo",
    personality: "feral",
    petCount: 1,
  },
];

function App() {
  const [catData, setCatData] = useState(catDataList);

  const petCat = (id) => {
    setCatData(catData => catData.map(cat => {
      if(cat.id === id) {
        return {...cat, petCount: cat.petCount + 1}
      } else {
        return cat;
      }
    }));
  }

  const calcTotalPets = (catData) => {
    return catData.reduce((total, cat) => {
      return total + cat.petCount;
    }, 0)
  };

  const totalPetTally = calcTotalPets(catData);

  return (
    <div className="App">
      <h2>Total Number of Pets Across All Kitties: {totalPetTally}</h2>
      <CatList 
        catData={catData}
        onPetCat={petCat}
      />
    </div>
  );
}

export default App;
