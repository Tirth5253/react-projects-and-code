/* eslint-disable jsx-a11y/anchor-is-valid */

import classNames from 'classnames';
import { useContext } from "react";
import NavigationContext from "../contex/navigation";

//here we recieves the 2 props in the function 
//the first prop is "to" which is the path we want to navigate
//the second one is the text as a "children" that we will pass in the "anchor" tag

function Link({to,children,className,activeClassName}){
  const {navigate,currentPath}=  useContext(NavigationContext);//this line says that we will use or import the navigate() function of the NavigationContext
   


  const classes=classNames('text-blue-500'
  ,className,
  currentPath===to&& activeClassName //so this says that if the our current path is the navigation path then we add this class this would cause our link to get highlight
  );//here className says that we will add some property to link by our own way as a prop

  const handleClick=(event)=>{
if(event.metaKey || event.ctrlKey){ //this code will basically says that if click using holding the ctrl key than this navigation happens in another page
    return; 
}

      event.preventDefault();
     navigate(to) 
    };
return <a href={to} onClick={handleClick}  className={classes}>{children}</a>
}
export default Link;