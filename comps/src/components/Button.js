//here in this file we will make a general button and then we will make a change in it by passing the props
//here in the button element it will recieve the prop from the App.js so we can make the custon text for the 
//perticular element...
//here the {children} prop is inbuilt so what it will do?
//it will allow us to write the name of button in b/w the <buttton>Click Me!</buttton> tags so if write this ,
//this will automatically parse it name to the button.js
//now if you say so that it have this <button> <icon/> </button> than icon will also be passed to button.js  
//the props after children will specify type of the button
//the proptypes named library would check if the any type of button will not be true simontaniosly 


import className from "classnames";
import { twMerge } from 'tailwind-merge';


function Button ({children
,primery,
secondary,
success,
warning,
danger,
outline,
rounded,
...rest
}){

//so here we have used the library called "classNames" by this we will writes the condition in the button suppose
//as "px py border" will apply to all but only varioation will occur by the condition we have written in it so the
//next code will be true when primary is true 
    const classes=twMerge(className(rest.className,'flex items-center  px-3 py-1.5 border my-2',{
        'border-blue-500 bg-blue-500 text-white':primery===true,
        'border-gray-900 bg-gray-900 text-white':secondary===true,
        'border-green-500 bg-green-500 text-white':success===true,
        'border-yellow-400 bg-yellow-400 text-white':warning===true,
        'border-red-500 bg-red-500 text-white':danger===true,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primery,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger

    }))

    return <button {...rest} className={classes} >{children}</button>
}

Button.propTypes={
    checkVariationaValue:({primery,
        secondary,
        success,
        warning,
        danger,
        outline,
        rounded})=>{
            const count =Number(!!primery)+
            Number(!!secondary)+
            Number(!!success)+
            Number(!!warning)+
            Number(!!danger)+
            Number(!!outline)+
            Number(!!rounded);  //here the logic behind is that "Number(!! true)" will gives 1 so if either any will
                                //get true then it will gives true and if more than 1 will get true then it will get
                                //count as more than 1 so for that we will give the error
        
  if(count>1){
    return new Error('Only one of primery secondary, success, warning,danger,outline,rounded can be true')
  }
    }
}
export default Button;