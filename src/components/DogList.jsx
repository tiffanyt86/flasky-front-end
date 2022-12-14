import Dog from "./Dog";

const DogList = (props) => {
    const dogs = props.dogData.map((dog, i) => {
      return <Dog
      key={i} 
      name={dog.name}
      age={dog.age}
      breed={dog.breed}
      cuteness={dog.cuteness}
      />
    })
    return (<div>
        {/* <Dog/>
        <Dog/>
        <Dog/> */}
        <div>
          {dogs}
        </div>
      </div>);
}

export default DogList;