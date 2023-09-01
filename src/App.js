import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/styles.scss'
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
