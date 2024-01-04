
import Accordion from "../components/Accordion";

function AccordionPage() {
    const items=[ //this will get passes to Accordion as a prop as array of object 
{
    id:1,
    label: 'Can i use React on a Project?',
    content:'YOu can use react on any project YOu can use react on any project YOu can use react on any projectYOu can use react on any project YOu can use react on any project YOu can use react on any projectYOu can use react on any project YOu can use react on any project YOu can use react on any project'
},{
    id:2,
    label: 'Can i use JS on a Project?',
    content:'YOu can use react on any project YOu can use react on any project YOu can use react on any projectYOu can use react on any project YOu can use react on any project YOu can use react on any projectYOu can use react on any project YOu can use react on any project YOu can use react on any project'
},{
    id:3,
    label: 'Can i use CSS on a Project?',
    content:'YOu can use react on any project YOu can use react on any project YOu can use react on any projectYOu can use react on any project YOu can use react on any project YOu can use react on any projectYOu can use react on any project YOu can use react on any project YOu can use react on any project'
}
    ]; 
    return <Accordion  items={items}/>
}
export default AccordionPage;