//here this file of book.js is crated with the reason of the creation of the context that we want to share with all the elemnets
//THIS IS THE STEP NO.1
// import { createContext,useState } from "react";
// import axios from "axios";
// const BooksContext=createContext();
// function Provider({children}){

   
//     const [books,setBooks]=useState([]);

// const fetchBooks= async()=>{
//    const responce =await axios.get('http://localhost:3001/books');
//    setBooks(responce.data)




// };


//DONT DO THIS
// fetchBooks()  by this you will fall in infinite loop

//we NEED TO CALL fetchbooks ONLY WHEN PAGE GETS RELOADED OR LOADS
//WE CAN DO THIS BY USING USE EFFECT



//this below code is to make editing in the record of the json file
// const editBookById=async(id,newTitle)=>{

//     const responce=  await axios.put(`http://localhost:3001/books/${id}`,{
//           title:newTitle,

//       })
// console.log(responce)

//       const updatedBooks=books.map((book)=>{
//           if(book.id===id){
//               return {...book,...responce.data};   //here the ...responce.data written before that we have written the title:newTitle the reason is bcse it will not only changes the title but in future if we added another field that also changes it like pages etc
//           }
//           return book;
      

      // })//this is the code of event handler will recieve the new name of the edited book title and we use this event handler
         // to pass all way down to the bookshow as a prop and this will be return with the title from the bookEdit
         // so we can update it in the "App";

//          setBooks(updatedBooks);
//   }   
  






//   const CreateBook=async(title)=>{
// //this below code is the second phase of our APP called data persistent
// //we will deal all the data to the json server by many methods

// // eslint-disable-next-line no-undef
// const responce=await axios.post('http://localhost:3001/books',{
//   title
// });






//         //=====Bad Code for the Updating Array,Objects etc ===============

//       // books.push({id:123,title:title});
//       // console.log(books);
//       // setBooks(books);        explaination of this is in the notes
  

//   //===============GOOOD CODE=======================

//   const UpdatedBooks=[...books,responce.data];//the responce's data shows book object
//   setBooks(UpdatedBooks);//this is the 3rd step of things we need to do in my notebook


// //this code is good bcse this will make change in the new array and we have used "Destructuring" to copy array 
// //so this method is used in the 'UseState' to upadate the array and Objects
// //so React find that completely diff. arrays so it will make change to the screen bu "STATE";


//   }


//   const deleteBookById=async(id)=>{
//   await axios.delete(`http://localhost:3001/books/${id}`)
//          const updatedBooks=books.filter((book)=>{
//           return book.id !== id;   

//          })
//          setBooks(updatedBooks);

//         };
//         const valueToShare={ //this is the object that will be shared by the rest of the app bse it will passes in the prop

//             books:books,
//             deleteBookById:deleteBookById,
//             editBookById:editBookById,
//             CreateBook:CreateBook,
//             fetchBooks:fetchBooks
//           }
          


// //this function will basically do the 2nd step in things we  need to do
// return <BooksContext.Provider value={{valueToShare}}>
//         {children}
//     </BooksContext.Provider>

// }
// export {Provider};//here its the custom export or named export bcse we have already an export of funtion BooksContext
// export default BooksContext;

import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
