//here in this project we will use 
//  1....DETECTING A USER CLICKING THE BUTTON====> "EVENT SYSTEM"
//  2....UPDATE CONTENT ON SCREEN=====> "STATE SYSTEM"
import { useState } from 'react';
import './animalShow.css';

import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import gator from './images/gator.svg';
import heart from './images/heart.svg';
import horse from './images/horse.svg';

const svgMap={
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse
}//  3.... we did this bcse this is short cut when key and value has same value
 // basically here we want to do this ========> bird:bird    cat:cat   cow:cow



function Animals({type}){
    const [clicks,setClicks]=useState(0);

    const  Handleclick = () =>{
    setClicks(clicks+1);
    };

    return<div className='animal-show' onClick={Handleclick}>
       <img className='animal' alt="animals" src={svgMap[type]}></img>
       <img  className='heart'
            alt="heart" 
            src={heart}
            style={{width:10+10*clicks+'px'}}
       ></img>
    </div>
}
export default Animals;
//4... so in return we return the image by images from svgMap as it is connected to images and which image will go
// to which is decided by type prop bcse each type animals is connected through its keys so if its 
// we will get the bird then its key is "0" then svgMap[0] will run and get image of bird

//here we used the "state" bcse this will count no. of counts and we will increse the size of heart.svg according to that