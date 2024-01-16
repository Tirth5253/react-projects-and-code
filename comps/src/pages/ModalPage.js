import Modal from "../components/Modal";// here the modalPage will have the button and the state of the modal and all the logic will have in the modal
import Button from "../components/Button";
import {  useState } from "react";


function ModalPage(){




const [showModal,setShowModal]=useState(false);//so this is the state that will decide where the modal is get viewed or not

const handleClick=()=>{
    setShowModal(true);
}

const handleClose=()=>{
    setShowModal(false);
}
const actionBar=<div>
<Button primery onClick={handleClose}>I Accept</Button>
</div>


const modal=<Modal onClose={handleClose} actionBar={actionBar}>
    <p>Here is an important agreement for you to accept</p>
</Modal>

return (<div className="relative">
    <Button onClick={handleClick} primery>Open Modal</Button>
     {showModal && modal}
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>
     <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p><p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p><p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat, mi a efficitur venenatis, nisi orci ullamcorper tellus, eu bibendum nunc quam ut justo. Praesent semper enim leo, at bibendum nunc luctus at. Ut at ligula venenatis, consequat lacus at, eleifend felis. Sed feugiat nisi sed ante euismod consequat. Vestibulum in tempus metus. Etiam bibendum pulvinar lorem. Sed ac metus vitae urna sollicitudin viverra.
     </p>

</div>)
}
export default ModalPage;