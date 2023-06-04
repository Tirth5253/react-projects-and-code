function ProfileCard(props) {
  return (
  <div className="card">
    <div className="card-image">
      <figure className="image is-1by1">
        <img src={props.image} alt="pda logo"></img>
      </figure>
    </div>
    <div className="card-content">
      <div className="media-content">
        <p className="title is-4">{props.title}</p>
        <p className="subtitle is-4">{props.handle}</p>
      </div>
    </div>
  </div>);  
}

export default ProfileCard;
//here "props" word is created by me 


//here you can repalce {props.title} by "destructuring"
//so you can write ===> const {title,handle}=props;
//now you have to write only 
               // ====> return (<div>title is {title} </div>)

//this means title value will be replaces with "props.title"  bcs its the first element of the "props" object



//=========NOTE
//or you can do this you will directly pass the variables "titles and handle" to the propfileCard
//like this  ===> function ProfileCard({title,handle}) and result will be same 
//this is also destructuring 

//here we have used "alt" bcse it will show here "pda logo"  when image is not present