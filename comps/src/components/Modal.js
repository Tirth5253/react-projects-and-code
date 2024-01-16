//for more about React Portals refers the Notes
import { useEffect } from "react";
import  ReactDOM  from "react-dom";

function Modal({onClose,children,actionBar}){
  useEffect(()=>{//so this is the useeffect that will lock our screeen when the modal window appears we then cant scroll through then
    document.body.classList.add('overflow-hidden');

    return ()=>{
        document.body.classList.remove('overflow-hidden');//this is the cleanup function that will says that remove that class when modal is closed
    };
},[]);


  return ReactDOM.createPortal(
    <div>
        <div className="fixed inset-0 bg-gray-300 opacity-80"  onClick={onClose}></div>
        <div className="fixed inset-40 p-10 bg-white">
          <div className="flex flex-col justify-between h-full">
            {children} 
            <div className="flex justify-end">
            {actionBar} 
            </div>
            </div>
        </div> 
    </div>,
    document.querySelector('.modal-container')
  )
}
export default Modal;