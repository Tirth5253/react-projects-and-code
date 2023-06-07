import SearchBar from './components/Searchbar';

function App(){

const handleSubmit=(term)=>{
  console.log('do a search with',term);
}

  return <div><SearchBar onSubmit={handleSubmit}/></div>
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