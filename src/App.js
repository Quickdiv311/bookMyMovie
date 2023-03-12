import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignForm from './components/shared/SignForm/SignForm';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import TicketPlan from './components/Booking/TicketPlan/TicketPlan';
import SeatPlan from './components/Booking/SeatPlan/SeatPlan';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:id" element={<MovieDetail/>} >
            </Route>
            <Route path="/movie/:id/ticketPlan" element={<TicketPlan/>} />
            <Route path="/movie/seatPlan/:cinemaId" element={<SeatPlan/>}/>
            <Route path="/sign" element={<SignForm/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
