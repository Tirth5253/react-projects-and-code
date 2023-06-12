import ImageShow from './imageShow';

function imageList({images}){
//by bolow mapping function we will print or get the each indivisual image from the Array
const RenderedImages=images.map((image)=>{
 
  return<div key={image.id}>
    <ImageShow  image={image}/>
        </div>
});



    return <div>{RenderedImages}</div>
  }
  export default imageList;