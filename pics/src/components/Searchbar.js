function Searchbar({onSubmit}){

const handleFormSubmit=(event)=>{
  event.preventDefault()
  onSubmit('cars')
};

    return <div>
      <form  onSubmit={handleFormSubmit}>
      <input/>
      </form>
      
      
    </div>
  }
  export default Searchbar;


  //here we have recieved  the prop called onSubmit from the App(parent)   
  //2... we have entered "event" in the event handler bcse when we write our code in the "FORM" so this will couse 
  //our page to go reload every time when we use the form.. so ".preventDeafult" will couse not to go
  