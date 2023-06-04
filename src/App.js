import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title='Alexa' handle='@alexa99'/>
      <ProfileCard  title='Cortana' handle='@cortana32'  />
      <ProfileCard  title='Siri' handle='@siri01'/>
     
    </div>
  );
} //here title and handle are custom made by me no inbuilt 

export default App;
