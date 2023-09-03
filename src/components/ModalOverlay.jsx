import React from 'react'
import '../styles/modalOverlay.scss'

const modalOverlay = ({onClose}) => {
  return (
    <div onClick={onClose} className='modal-overlay'></div>
  ); 
}

export default modalOverlay;