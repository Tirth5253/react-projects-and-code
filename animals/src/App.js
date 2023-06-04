import { useState } from "react";//3..now we uses the state in react it will help to indiacte change at run time
                                 // here we will change animals count for more details check Notes
import AnimalShow from './animalShow';
import './App.css';


function getRandomAnimal(){//  4.......this function will basically act as a  pool of animals that we want to select from
  const animals=['bird','cat','cow','dog','gator','horse'];
  return animals[Math.floor(Math.random()*animals.length)]//5... this will randomly selects the animals from array 
}

 

function App() {

const [animals,setAnimals]=useState([]);//here we use 'setAnimals' to make a change or assign the value to the animals nor direct use animals for that

const renderedAnimals= animals.map((animal,index)=>{
  return <AnimalShow type={animal} key={index}/>
})




 const handleclick=() =>{//  1..this arrow function will run when button will get clicked
setAnimals([...animals,getRandomAnimal()]);//5...this will take the output of getRandomAnimal in 'animals'
 };



  return <div className="app">
   <button onClick={handleclick}>ADD ANIMALS</button> 
   <div className="animal-list">{renderedAnimals}</div>
  </div>
}
export default App;

//2...here in handleclick it dont have () bcse this will run the function right after the app started not when 
//button is clicked