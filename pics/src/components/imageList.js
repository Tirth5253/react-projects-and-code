import ImageShow from './imageShow';

function imageList({images}){
//by bolow mapping function we will print or get the each indivisual image from the Array
const RenderedImages=images.map((image)=>{

  return <ImageShow image={image}/>
});



    return <div>{RenderedImages}</div>
  }
  export default imageList;