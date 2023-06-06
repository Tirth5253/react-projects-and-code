function Searchbar({onSubmit}){

const handleClick=()=>{
  onSubmit('cars')
};

    return <div>
      <input/>
      <button onClick={handleClick}>click me</button>
    </div>
  }
  export default Searchbar;


  //here we have recieved  the prop called onSubmit from the App(parent)   