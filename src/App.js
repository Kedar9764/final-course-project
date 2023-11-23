import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import Reservation from './Components/Pages/Reservation';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/reservation" element={<Reservation />}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
