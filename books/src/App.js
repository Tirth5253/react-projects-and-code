import { useState } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){

    const [books,setBooks]=useState([]);

    const CreateBook=(title)=>{
          //=====Bad Code for the Updating Array,Objects etc ===============

        // books.push({id:123,title:title});
        // console.log(books);
        // setBooks(books);        explaination of this is in the notes
    

    //===============GOOOD CODE=======================

    const UpdatedBooks=[...books,{id:Math.round(Math.random()*9999),title:title}];
    setBooks(UpdatedBooks);
//this code is good bcse this will make change in the new array and we have used "Destructuring" to copy array 
//so this method is used in the 'UseState' to upadate the array and Objects
//so React find that completely diff. arrays so it will make change to the screen bu "STATE";

 
    }

    return <div className="app">
        <BookList books={books}/>
        <BookCreate onCreate={CreateBook}/>       
    </div>
}

export default App;