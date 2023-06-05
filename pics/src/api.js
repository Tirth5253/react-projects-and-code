import axios from 'axios';
const searchImages =async(term)=>{
    const responce=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{Authorization:'Client-ID Ci9GqnljhzfCJqhSfWj41nhCOgkRiF5rAP73LhGwop4 '},
        params:{query:term}

    });
   
     return responce.data.results;
     
};
export default searchImages;
 

//this is the module for the api for more details refer
//===========USE OF ASYNC AND AWAIT ==============
//as we know that js will run by line by line 
//so the thing is that the responce js code will still run even when the api has not fatched the data so it will not
//give the responce bcse js will run before responce has been generated
// so that keywords will tell the js that wait until the responce get back
//await will tell js to wait
//async is the requiremnet of the await keyword

//and we here returned this way bcse this will get us the images before it gave me the whole array of objects

//for further app details please refer the notes