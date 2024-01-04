import { useState } from "react";
import {GoChevronDown,GoChevronLeft} from "react-icons/go"

function Accordion({items}){

const [expandedIndex,setExpandedIndex]=useState(-1); //so this is the state that is responsible for accordian component to get expanded or collapsed
                                                   //the useState 0 is  indiacates which no. of accordian will get expanded or collapsed
                                                   //here the by default usestate is -1 bcse all section will get closed when initially
 
 const renderedItems=items.map((item,index)=>{

const isExpanded=index===expandedIndex;

const content= isExpanded && <div   className="border-b p-5 ">{item.content}</div>   //here in this line there is a concept of truthy and falsy value of && op.so the thing that happens that && will returns first falsy value or the last truthy value if both true...
                                                         //so the isExpanded gets true means we will have content as <div>{}</div> bcse its the last falsy value and if the content var. is false means the content is equal to isExapnded so it will not dsplay the item data only its title
 



 const handleClick=(nextIndex)=>{
    if(expandedIndex===nextIndex){setExpandedIndex(-1);}  
    else{                   //this code will help us to again collapde content when user clicks 
    setExpandedIndex(nextIndex)}
 }                                                        

const Icon=<span className="text-2xl">{isExpanded?<GoChevronDown/>:<GoChevronLeft/>}</span> //so this is the code in that we have logic that is "isExapnded" is true then show down icon and is false then show the left icon

     return (
        <div key={item.id}> 
            <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"  onClick={()=>{handleClick(index)}}>
                {item.label}
                {Icon}
            </div>
            <div>
                {content}
            </div>
        </div>
     )
    })
    return <div className="border-x border-t rounded"> {renderedItems}</div>
 }// so the thing happens in the onclick is that when we clicks the "setExapandedIndex" will become equal to "index" of the mapping function so by "setExapndIndex" ExpandIndex will also becomes the same as the index so then it will fulfill the the condition of the "isExpanded" so the "content" will shows the {item.content}
 export default Accordion;