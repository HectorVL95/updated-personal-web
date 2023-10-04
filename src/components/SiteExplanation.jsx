import React from 'react'
import DataPortfolio from '../DataPortfolio';
import '../styles/LdpExplanation.scss';
import { useParams } from 'react-router-dom';

const SiteExplanation = ({dataEl}) => {

  const {id} = useParams();
  const SelectedSite = DataPortfolio.find(project => project.id.toString() === id)

  return (
    <main className='SiteExplanation'>
      <div className='logo-wrap'>
        {SelectedSite.logo}
        <h1 className='page-title'>{SelectedSite.name}</h1>
        <p>Visit <a href={SelectedSite.siteLink}>Here</a></p>
        <p><b>Launched:</b> {SelectedSite.date}</p>
        <div className='screenshot-wrap'>
          <img className='web-screenshot' src={SelectedSite.img} alt="Web" />
        </div>
      </div>
      <div className='selectedSite-wrap'>
        {SelectedSite.longExplanation}
      </div>
    </main>
  );
}

export default SiteExplanation;