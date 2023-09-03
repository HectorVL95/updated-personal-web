import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/styles.scss'
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';


function App() {

  function togglecoverBody(){
    document.body.classList.toggle('no-scroll')
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header togglecoverBody={togglecoverBody}/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Portfolio' element={<Portfolio/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
