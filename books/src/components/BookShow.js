import { useState,useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/book";

function BookShow
({book}){//we recieved the onEdit prop so we can use to pass it down to the "BookEdit" in phase 1 of app

  
  const [showEdit,setShowEdit]=useState(false);//this is the our state rep. for the edit form  it is bydefault 
  //fasle bcse if it is false then it will be display the book name which is our previous 


const {deleteBookById}=useContext(BooksContext);//here we have got the deletebookbyid bse bookshow only uses the deletebookbyid

const handleDeleteClick=()=>{
  deleteBookById(book.id);   
}
const handleEditClick=()=>{
  setShowEdit(!showEdit);
}//this code  will be run when user will click the pencil as the default value will be changed to true and we will
//have our "bookedit" componrnt open that will consists the form 


const handleSubmit=()=>{
    setShowEdit(false);
    //her we have onEdit combined in this without passing the prop  so it pass to the BookEdit
}

let content=<h3>{book.title}</h3>//this is the logic code so this is how the original book title will be changed.and "bookEdit" will get open
if(showEdit){ 
    content=<BookEdit  onSubmit={handleSubmit}  book={book}/>//here we recieved the onEdit
}


   
    return <div className="book-show">
        <img 
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200`}/>
          <div>{content} {/* so this thing will shows the title or edit title*/}</div>
        <div className="actions"  onClick={handleEditClick}> 
        <button className="edit" >Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
}

export default BookShow
;