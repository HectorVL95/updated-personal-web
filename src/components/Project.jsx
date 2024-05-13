import React from 'react'
import '../styles/Project.scss'
import { Link } from 'react-router-dom';

const Project = ({dataEl}) => {
  return (
    <article className='project'>
      <div className='web-container'>
        <img src={dataEl.img} alt={dataEl.name} />
      </div>
      <div className='date-tech-wrap'>
        <p>{dataEl.date}</p>
        <Link to={`/SiteExplanation/${dataEl.id}`} >
          {dataEl.logo}
        </Link>
        <div>{dataEl.technologies}</div>
      </div>
      <div className='website-info-wrap'>
        <a href={dataEl.siteLink}className='web-name' title='Visit project'>{dataEl.name}</a>
        <p className='web-description'>{dataEl.description}</p>
      </div>
    </article>
  );
}

export default Project;