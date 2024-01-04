//this is the component that will show that editing form when we hit pencil


import { useState ,useContext} from "react";
import BooksContext from "../context/book";
function BookEdit({book ,onSubmit}){//recived the onEdit

const [title,setTitle]=useState(book.title);//this is the state this state will be used to change the value of our 
//book name
//here we have recieved the "book" prop from the parent "bookShow" so we can set the default value of the editing 
//form as the previous book title


const {editBookById}=useContext(BooksContext)

const handleChange=(event)=>{
    setTitle(event.target.value);//this code is used to take input from the "Input" tag
}
const handleSubmit=(event)=>{
  event.preventDefault();//this code will be usd for the submiting the form element

   onSubmit();  
   editBookById(book.id,title) //this prop includes "onEdit" as you can see by in BookShow,, gets the value from this bcse it will be having confirm value of "edited title"
  //after the user sumbmit the form so this code is written in the "HandleSubmit"
  //this will send the value of book which was edited to the "BookShow"
  
}


    return <form className="book-edit" onSubmit={handleSubmit}> 
      <label>Title</label>
      <input className="inpur"  value={title} onChange={handleChange}/>
      <button className="button is-primary">
        Save
      </button>
    </form>
}

export default BookEdit;