import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sign from './pages/Sign/Sign';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign" element={<Sign/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
