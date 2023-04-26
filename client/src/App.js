
import './App.css';
import React,{useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon]= useState([])
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      // .then(response => console.log(response)
      .then(response => {setPokemon(response.results)})
      .catch(err => console.log(err))

    // array of all variable we want to keep track of 
},[]);
  
  return (
    //display all 
    <div style={{textAlign : "center"}}  >
        <h1 >All Name</h1>
      <ul>
    {
      pokemon.map((names,i)=>{
        return(<li key={i} style={{listStyle: "none"}}>
          
          {names.name}
          </li>)
      })
    }
    </ul>
    </div>
  )
}

export default App;
