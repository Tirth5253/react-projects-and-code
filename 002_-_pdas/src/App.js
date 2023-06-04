import 'bulma/css/bulma.css';//this line will import the css from the bulma libraries x
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png';// here we have imported the images 


function App() {
  return (
    <div>
      <section className='hero is-primary'>
      <div className='hero-body'><p className='title'>Personal Digital Assistants</p></div>
      </section>
      
<div className='container'>
  <section className='section'>
    <div className='columns'>
      <div className='column is-3'>
      <ProfileCard  title='Alexa' handle='@alexa99'  image={AlexaImage} />
      </div>
      <div className='column is-3'>
      <ProfileCard title='Cortana' handle='@cortana34' image={CortanaImage}/>
      </div>
      <div className='column is-3'>
      <ProfileCard  title='Siri' handle='@siri001' image={SiriImage}/>
      </div>
    </div>
  </section>
</div>
     
    </div>
  );
}
//here "title" and "handle" word is created by me
//here in image we have to use {} bcse they are the variables in the JS
export default App;
