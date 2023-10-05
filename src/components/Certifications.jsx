import React from 'react'
import '../styles/Certification.scss'

const Certifications = ({dataEl, handleImageClick}) => {
  return (
    <article className='Certifications'>
      <div onClick={() => handleImageClick(dataEl.id)}>
      {dataEl.cert}
      </div>
      <p>{dataEl.name}</p>
    </article>
  );
}

export default Certifications;


