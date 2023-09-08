import React from 'react'
import '../styles/Job.scss'


const Job = ({dataEl}) => {
  return (
    <article className='Job'>
      {dataEl.company}
      <p>{dataEl.date}</p>
      <p><b>{dataEl.position}</b></p>
      <p>{dataEl.description}</p>
    </article>
  );
}

export default Job;