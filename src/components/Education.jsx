import React from 'react'
import '../styles/Education.scss'

const Education = ({dataEl}) => {
  return (
    <article className='Education'>
      {dataEl.institution}
      <p>{dataEl.date}</p>
      <p>{dataEl.location}</p>
      <p>{dataEl.degree}</p>
    </article>
  );
}

export default Education;