import { BrowserRouter, Route, Routes} from 'react-router-dom';
import '../src/styles/styles.scss';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ResumeEducation from './components/ResumeEducation';
import Contact from './components/Contact';
import HideHeader from './components/HideHeader';
import LdpExplanation from './components/LdpExplanation';
import SiteExplanation from './components/SiteExplanation';
import ScrolltoTop from './components/ScrolltoTop';

function App() {

  function togglecoverBody(){
    document.body.classList.toggle('no-scroll')
    
  }

  return (
    <div className="App">
      <BrowserRouter>
        <HideHeader>
          <Header togglecoverBody={togglecoverBody}/>
        </HideHeader>
        <ScrolltoTop/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Portfolio' element={<Portfolio/>} />
          <Route path='/ResumeEducation' element={
          <ResumeEducation/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/LdpExplanation' element={<LdpExplanation/>}/>
          <Route path='/SiteExplanation/:id' element={<SiteExplanation/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

