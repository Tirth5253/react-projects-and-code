import { useContext } from 'react';
import BooksContext from '../context/book';
import BookShow from './BookShow';
function BookList( ){//here we recieved the onEdit prop for BookEdit in phase 1 of app

const {books}=useContext(BooksContext);

 





const renderedBooks=books.map((book)=>{
    return <BookShow key={book.id} book={book}/>}) //here we used both props and context bcse when we pass the
                                                    //prop to bookshow it will gauss books will coming but which
                                                    //book it  will find out by reaching to the context file
    
    
   //  <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>; })
    //in this we will make another compo. named BookShow that will
                                                   //actually show the books we created that accepts the prop called
                                                   //'Book' get property called book which is used in the map so it 
                                                   //will passed down by the prop so we can dislay it in 'BookShow'.
                                                   //we also pass the title as a key in its parent BooksList 
                                                   //so we can print in BookShow
                                                //we have also passed the onDelete so we can delete the entry
                                                   // by the filter method 
                                                   //this will help the add the functionality of "X" button..
                                                   //here we recieved the onEdit Prop in the "BookShow";
                                                   //this will be later pass down to the "BookEdit"

    return <div className='book-list'>

         {renderedBooks}</div>
}

export default BookList;