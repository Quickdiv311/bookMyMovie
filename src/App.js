import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignForm from './components/shared/SignForm/SignForm';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign" element={<SignForm/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
