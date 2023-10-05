import React, { useEffect, useState } from 'react'
import '../styles/ResumeEducation.scss';
import DataJob from '../DataJob';
import Job from './Job';
import Education from './Education';
import DataEdu from '../DataEdu';
import DataCerts from '../DataCerts';
import Certifications from './Certifications';
import cancelCert from '../assets/cert-cancel-button.svg'
import leftArrow from '../assets/left-arrow-backup-2-svgrepo-com.svg'
import rightArrow from '../assets/right-arrow-backup-2-svgrepo-com.svg'

const ResumeEducation = () => {
  const[isModalOpen, setIsModalOpen]= useState(false)
  const[ , setSelectedImage]= useState(null)
  const[selectedCertIndex, setSelectedCertIndex] = useState(0)

  const role = DataJob.map(dataEl=>{return <Job key={dataEl.id} dataEl={dataEl}/>})

  const education = DataEdu.map(dataEl =>{return <Education key={dataEl.id} dataEl={dataEl}/>})

  function handleImageClick(id){
    console.log(`clicked on img with id ${id}`);
    const selectedDataEl = DataCerts.find((dataEl) => dataEl.id === id);
    setSelectedImage(selectedDataEl.cert)
    setSelectedCertIndex(DataCerts.indexOf(selectedDataEl))
    setIsModalOpen(true)
  }
 
  function handleCloseModal(){
    setIsModalOpen(false)
  }

  const certifications = DataCerts.map(dataEl => {return <Certifications key={dataEl.id} dataEl={dataEl} handleImageClick={handleImageClick}/>})

  function nextCert(){
    setSelectedCertIndex((prevIndex) => 
      prevIndex === DataCerts.length - 1 ? 0 : prevIndex + 1)
  }

  function previousCert(){
    setSelectedCertIndex((prevIndex) =>
      prevIndex === 0 ? DataCerts.length - 1 : prevIndex - 1)
  }

  useEffect(()=>{
    const handleKeydown = (event) =>{
      if (selectedCertIndex !== null){
        if(event.key === "ArrowLeft" && selectedCertIndex > 0){
          previousCert();
        } else if (event.key === "ArrowRight"&&selectedCertIndex < DataCerts.length - 1){
          nextCert()
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () =>{
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [selectedCertIndex])
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
        <>  
        <div className='modal-overlay-content-certs'>
          <div className='modal-content'>
            <article className='custom-image-container'>
              <div className='button-container'>
                <button className='close-button-modal' onClick={handleCloseModal}>
                  <img src={cancelCert} alt="Cancel" />
                </button>
              </div>
              {<img
                key={selectedCertIndex}
                src={DataCerts[selectedCertIndex].cert.props.src}
                alt='Selected'
              />}
              <div className='arrow-wrap'>
                { selectedCertIndex !== 0 ? (
                <img onClick={previousCert} className='arrows' src={leftArrow} alt="Previous" />) : (<img src={leftArrow} className='left-arrow' alt='Previous'/>)}
                { selectedCertIndex !== DataCerts.length -1 ? (
                  <img onClick={nextCert} className='arrows' src={rightArrow} alt="Next" />) : (<img src={rightArrow} className='right-arrow' alt='Next'/>)}
              </div>
            </article>
          </div>
        </div>
        </>
      )}
    </main> 
  );
}

export default ResumeEducation;
