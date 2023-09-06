import React from 'react'
import '../styles/Project.scss'

const Project = ({dataEl}) => {
  return (
    <article className='project'>
      <div className='web-container'>
        <img src={dataEl.img} alt="Liberty Dental Clone" />
      </div>
      <div className='date-tech-wrap'>
        <p>{dataEl.date}</p>
        {dataEl.logo}
        <div>{dataEl.technologies}</div>
      </div>
      <div className='website-info-wrap'>
        <a href={dataEl.siteLink}className='web-name'>{dataEl.name}</a>
        <p className='web-description'>{dataEl.description}</p>
      </div>
    </article>
  );
}

export default Project;