import React, { useState } from 'react'
import '../styles/ResumeEducation.scss';
import DataJob from '../DataJob';
import Job from './Job';
import Education from './Education';
import DataEdu from '../DataEdu';
import DataCerts from '../DataCerts';
import Certifications from './Certifications';
import cancelCert from '../assets/cert-cancel-button.svg'

const ResumeEducation = ({}) => {
  const[isModalOpen, setIsModalOpen]= useState(false)
  const[selectedImage, setSelectedImage]= useState(null)

  const role = DataJob.map(dataEl=>{return <Job key={dataEl} dataEl={dataEl}/>})

  const education = DataEdu.map(dataEl =>{return <Education key={dataEl} dataEl={dataEl}/>})

  function handleImageClick(id){
    console.log(`clicked on img with id ${id}`);
    const selectedDataEl = DataCerts.find((dataEl) => dataEl.id === id);
    setSelectedImage(selectedDataEl.img)
    setIsModalOpen(true)
  }
 
  function handleCloseModal(){
    setIsModalOpen(false)
  }

  const certifications = DataCerts.map(dataEl => {return <Certifications key={dataEl} dataEl={dataEl} handleImageClick={handleImageClick}/>})


  return (
    <main className='ResumeEducation'>
      <h1 className='page-title'>Resume</h1>
      <div className='sub-wrap'>
        <h3 className='page-sub'>Employment</h3>
      </div>
      {role}
      <div className='sub-wrap'>
        <h3 className='page-sub'>Education</h3>
      </div>
      {education}
      <div className='sub-wrap'>
        <h3 className='page-sub'>Certifications</h3>
      </div>
      <div className='certs-wrap'>
          {certifications}
      </div>
      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <div className='custom-image-container'>
            <button className='close-button-modal' onClick={handleCloseModal}>
              <img src={cancelCert} alt="Cancel" />
            </button>
            {selectedImage}
            </div>
          </div>
        </div>
      )}
    </main> 
  );
}

export default ResumeEducation;

