import React from 'react'
import '../styles/Certification.scss'

const Certifications = ({dataEl, handleImageClick}) => {
  return (
    <article className='Certifications'>
      <div onClick={() => handleImageClick(dataEl.id)}>
      {dataEl.img}
      </div>
      <p>{dataEl.name}</p>
    </article>
  );
}

export default Certifications;


