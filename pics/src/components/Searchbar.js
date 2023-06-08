import { useState } from "react";

function Searchbar({onSubmit}){

const handleFormSubmit=(event)=>{
  event.preventDefault()
  onSubmit(term)

//NEVER WRITE THIS FOR REACT
//document.querySelector('input').value; for the value of input from the user bcse of forms' component wierdness
//in the react
//bcse this text can be used for way many things 

};
const [term,setTerm]= useState('');

const handleChange=(event)=>{
  setTerm(event.target.value);  //this will change(set) our term to the input by the user as
                                //onchange==event  value== input by user and target is the catagory
                                //on further details that how we did refer the notes
  
}


    return <div>
      <form  onSubmit={handleFormSubmit}>
      <input value={term}  onChange={handleChange}/>
      </form>
      
      
    </div>
  }
  export default Searchbar;


  //here we have recieved  the prop called onSubmit from the App(parent)   
  //2... we have entered "event" in the event handler bcse when we write our code in the "FORM" so this will couse 
  //our page to go reload every time when we use the form.. so ".preventDeafult" will couse not to go

//NOTE we will write the "event" as a parametre every time we pass the eventHndler in pure HTML compo.
  