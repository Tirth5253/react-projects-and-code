import { useState } from "react";

// import AccordionPage from "./pages/AccordionPage";
import Dropdown from "../components/Dropdown";
function DropdownPage() {

const [selection,setSelection]=useState(null);//this state is used to get name of option in Dropdown after user will clicks

const handleSelect=(option)=>{
    setSelection(option);
}

const options=[
    {label:"Red",value:"red"},
    {label:"Green",value:"greem"},//here that dropdown have both label and value bcse the label will displat name on the screen and value will be get used to make operations on them 
    {label:"Blue",value:"blue"},
    
]


    return<Dropdown  
    selection={selection} 
    onSelect={handleSelect}  
    options={options}/>
    }
export default DropdownPage;