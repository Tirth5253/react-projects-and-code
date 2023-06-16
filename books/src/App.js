import { useState } from "react";
import BookCreate from './components/BookCreate';

function App(){

    const [books,setBooks]=useState([]);

    const CreateBook=(title)=>{
           console.log("need to add title",title);  
    }

    return <div>
        <BookCreate onCreate={CreateBook}/>       
    </div>
}

export default App;