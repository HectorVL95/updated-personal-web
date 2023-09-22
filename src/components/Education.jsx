import React from 'react'
import '../styles/Education.scss'
import { Link } from 'react-router-dom';

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