import Modal from "../components/Modal";// here the modalPage will have the button and the state of the modal and all the logic will have in the modal
import Button from "../components/Button";
import { useState } from "react";

function ModalPage(){

const [showModal,setShowModal]=useState(false);//so this is the state that will decide where the modal is get viewed or not

const handleClick=()=>{
    setShowModal(true);
}

const handleClose=()=>{
    setShowModal(false);
}

return (<div className="relative">
    <Button onClick={handleClick} primery>Open Modal</Button>
     {showModal && <Modal onClose={handleClose}/>}
</div>)
}
export default ModalPage;