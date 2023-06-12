import { useState } from 'react';


import ImageList from './components/imageList';
import SearchBar from './components/Searchbar';
import searchImages from './api';

function App(){

//this below state is for the Imagelist so we can make changes OnScreen by Use the images that we fetch from the Api

const [images,setImages]=useState([]);




const handleSubmit=async (term)=>{
 const result =await searchImages(term);
 setImages(result);
}

  return <div>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
  </div>
};

export default App;

//here we have the handleSubmit function that will be passed in the searchBar by props module bcse it contains button
//so we user this function as a event handler so we pass PARENT TO CHILD 
//and this function will recive some term from the child component (that is what we want CHILD TO PARENT)
//this function will have another function of 'SearchImages' that is the what we want to run when user clicks on button
//here onSubmit is a prop that we passes to the SearchBar in div

//here SearchBar is a custom made components so unlike in button(onClick) we ahve our custom made component called "onSubmit" you can  name it any thing you want
//so the main thing is "handleSubmit" will be pass down as a PROP VALUE in the CHILD(SearchBar) and that is what we want
//so the "handleSubmit" will go to child and will bring the "TERM" in the "PARENT"

//===>SUMMERY so in simple words "handleSubmit" function will go to child by props and will come back with TERM by EVENTHANDLER of button or ENTER

//as we can see that in SearchBar.js we have OnClick function "handleClick" so it will run our prop "OnSubmit" in that

//2... now we will use "Async & Await" in "Handle submit" bcse there is possibilty that we can get responce late and
// JS will compile way before so we tell js that wait till the responce come back