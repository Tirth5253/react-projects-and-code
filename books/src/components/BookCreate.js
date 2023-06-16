import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
function BookCreate({onCreate}){

//this component will used to create a new book and we will treat as search bar in prev. project bcse it also component of
//form

const [title,setTitle]=useState('');

const handleChange=(event)=>{
    setTitle(event.target.value);
}

const handleSubmit=(event)=>{
event.preventDefault();
onCreate(title);
};


    return <div><form onSubmit={handleSubmit}>
        <label>Enter a Title</label >
        <input value={title} onChange={handleChange}/>
        <button>Create!</button>
        </form></div>
}

export default BookCreate;