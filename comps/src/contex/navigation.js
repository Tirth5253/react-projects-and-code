import { useState, createContext, useEffect } from "react";
//this is a contex file which is made bcse of we would provide path to all the files 

const NavigationContext=createContext();

const NavigationProvider=({children})=>{
    const [currentPath,setCurrentPath]=useState(window.location.pathname);//this state will track the path of the app when we interact

useEffect(()=>{
    const handler=()=>{
     setCurrentPath(window.location.pathname);//so it will do that it changes our path to latest one with useState 
    }
    window.addEventListener("popstate",handler);//this code says that popstate will tract the track when we click the back and forward button so it says that when we do that run the "handler" function
//this is all the code is works only when the url navigation        is made through the pushState function
},[])


const navigate=(to)=>{//this is a function the purpose is written in notes so it recieves the argument "to" that is the path that we want to move the page
    
    window.history.pushState({},'',to)//this line will changes the pushstate means the addressbar to "to" address
    setCurrentPath(to); //this will changes the state
}


//this below in the value prop says that it will share the "currentPath, navigate" to all the members of the application
    return <NavigationContext.Provider value={{currentPath,navigate}}>
       
        {children}
    </NavigationContext.Provider>
}

export {NavigationProvider};
export default NavigationContext;