import { useEffect,useContext } from "react";

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from "./context/book";

function App(){


   const {fetchBooks}= useContext(BooksContext);//so this will alow to access fetchbooks in the object in the provider file
   


//the below code is of the useEffect wich is help us to load fetchbooks only when the page is loaded or reload
useEffect(()=>{
    fetchBooks()//this fetchbooks will go to context file and access the fetchbooks function
},[]) //now even if you reload the website your books will remain same







    return <div className="app">
        <h1>Reading List</h1>
        <BookList  />   
        <BookCreate  />       
    </div>
}
/* <BookList  onEdit={editBookById} books={books}  onDelete={deleteBookById}/>    */
/* <BookCreate onCreate={CreateBook} /> */

export default App;