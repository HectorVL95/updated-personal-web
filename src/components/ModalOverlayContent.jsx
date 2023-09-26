import React from 'react'
import '../styles/Modal-overlay-content.scss'

const ModalOverlayContent = ({onClose}) => {
  return (
    <div onClick={onClose} className='modal-overlay-content'></div>
  );
}

export default ModalOverlayContent;