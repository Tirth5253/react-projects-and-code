import { useState, createContext } from "react";
//this is a contex file which is made bcse of we would provide path to all the files 




const NavigationContext=createContext();

const NavigationProvider=({Children})=>{
    const [currentPath,setCurrentPath]=useState(window.location.pathname);

    return <NavigationContext.Provider value={{}}>
        {currentPath}
        {Children}
    </NavigationContext.Provider>
}

export {NavigationProvider};
export default NavigationContext;