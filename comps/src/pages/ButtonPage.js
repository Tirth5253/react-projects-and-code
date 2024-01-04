import Button from "../components/Button";
import {GoBell,GoCloud,GoDatabase} from 'react-icons/go';

function ButtonPage() {
    return <div><div> 
        <Button success rounded className="mb-6"><GoBell/>    Click Me!</Button>
        </div>
        <div>
        <Button danger> <GoCloud/>    Buy Now!</Button>
        </div>
        <div>
        <Button warning> <GoDatabase/>   See Deal!</Button>
        </div>
        <div>
        <Button secondary>Hide Ads!</Button>  
        </div>
        <div> 
        <Button primery outline>Something!</Button>
        </div>
        </div>
}
export default ButtonPage;