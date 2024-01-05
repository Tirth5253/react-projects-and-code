import { useEffect, useState,useRef } from "react";
import {GoChevronDown} from 'react-icons/go';
 


function Dropdown({options,selection,onSelect}){

const [isOpen,setIsOpen]=useState(false);//this state is res. for the options to get open or closed



const  delEl=useRef();//for more deatils about this refer notes

//this below code is for when user clicks anywhere besides dropdown the dropdown should be closed for more refer note
//the return functions ensures that if our drpdown get deleted then the this fn will stop the code to executes if user clicks on any where else bcs then it will be waste of time
useEffect(()=>{
const handle=(event)=>{
if(!delEl.current.contains(event.target)){
   setIsOpen(false);
}
};
document.addEventListener('click',handle,true);
return()=>{
   document.removeEventListener('click',handle)
}
},[])





const handleClick=()=>{
   setIsOpen(!isOpen)           //so this will cauese what the opp. of  the isOpen so it will close if open or just open if closed
}

const handleOptionClick=(option)=>{
   setIsOpen(false); 
   onSelect(option);   //here we have passed the option means the selected option in the "onSelect" prop so it will passes to the "handleSelect" in the App so there our "selection" state will get replaced  NULL by our "Option" 
}



const renderedOptions=options.map((option)=>{     //we here map and bring the options from APP so we can use them indivisually
                                                //here below we will create a list of elements so we need to define key Prop in Div

return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>handleOptionClick(option)} key={option.value}> 
   {option.label}
</div>;
});   

  //so here is the thing the "selection?.label" will say that if selection is null then it will give undefined so the truthy value "Selected" will go but if thats not then it will retuen label of the option
   return  (<div ref={delEl} className="w-48 relative "> 
      <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"  onClick={handleClick}>{selection?.label || 'Selected...'}<GoChevronDown className="text-lg"/></div>
      {isOpen && <div  className="absolute top-full border rounded p-3 shadow bg-white w-full" >{renderedOptions}</div>}
      </div>)
   
}
export  default Dropdown;