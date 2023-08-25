import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../src/styles/styles.scss'
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
