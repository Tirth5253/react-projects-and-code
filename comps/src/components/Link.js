/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import NavigationContext from "../contex/navigation";

//here we recieves the 2 props in the function 
//the first prop is "to" which is the path we want to navigate
//the second one is the text as a "children" that we will pass in the "anchor" tag

function Link({to,children}){
  const {navigate}=  useContext(NavigationContext);//this line says that we will use or import the navigate() function of the NavigationContext
    const handleClick=(event)=>{
      event.preventDefault();
     navigate(to)
    };
return <a onClick={handleClick}>{children}</a>
}
export default Link;