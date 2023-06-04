// 1) Import the React and ReactDOM libraries

import { render } from '@testing-library/react';
import React from 'react';//this lib. will fetches the react components...
import ReactDOM from 'react-dom/client';//this lib. is used to show our data into the browser

// 2) Get a reference to the div with ID root

const el = document.getElementById('root');
//as in the html code it has id of "root" so call div by id

// 3) Tell React to take control of that element

const root = ReactDOM.createRoot(el);
//by this react will first run this command and then create the div so all the coe will be writtten here

// 4) Create a component

function App() {

  //you can also do this
  const message = "I am learning react";

  return (
          
         [ <input type={Number} style={{color:"red",border:'3px solid red'} }/>,
         <h1>Hi there! {message}</h1>]
         

         
         )  
//you can print or use any varieable except boolean,null,undefined or "objects" like message=true; bcse it cant render boolean
//bcse react cant show the object like classes as an arrAY 

}

//here the elements that look like html is basicslly a jsx components

// 5) Show the component on the screen

root.render(< App/>);
//render is used to show the component so here will show the component from the "App"
//function




//unlike html in react we input like this 
//return      <input type="number" min={5} max={10}/>       ==>this is also called the "props";
//except all in the input ,that are the prop.(properties)  of the input


//if you bored with the type of property writing than you cn also do this
//function app(){
//     const input="number"
//     const min={5}
//          return  (<input 
//                       type=input
//                        min=min)
//         }
//by this you saves the {} and ""


//you can't input the object  like
//  const config={color : 'red' }
//in <h1><h1/>
//but can use as a property like in input





