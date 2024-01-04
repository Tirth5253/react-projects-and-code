
import { useState,useContext } from "react";
import BooksContext from "../context/book"; 

function BookCreate(){


//this component will used to create a new book and we will treat as search bar in prev. project bcse it also component of
//form

const [title,setTitle]=useState('');

const {createBook}=useContext(BooksContext);

const handleChange=(event)=>{
    setTitle(event.target.value);
}

const handleSubmit=(event)=>{
event.preventDefault();
createBook(title);
setTitle('');//this will empty the Input after we hit the submit Button so we easily add new book   
};


    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
        <label>Enter a Title</label >
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button">Create!</button>
        </form></div>   
}

export default BookCreate;