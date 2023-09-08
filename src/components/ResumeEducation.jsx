import React from 'react'
import '../styles/ResumeEducation.scss';
import DataJob from '../DataJob';
import Job from './Job';
import Education from './Education';
import DataEdu from '../DataEdu';

const ResumeEducation = () => {

  const role = DataJob.map(dataEl=>{return <Job key={dataEl} dataEl={dataEl}/>})

  const education = DataEdu.map(dataEl =>{return <Education key={dataEl} dataEl={dataEl}/>})

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
    </main> 
  );
}

export default ResumeEducation;