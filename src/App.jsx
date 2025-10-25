import './App.css';

import { LandingPage } from './pages/landing-page/LandingPage';
import { NotFoundPage } from './pages/not-found-page/NotFoundPage';
import { Routes, Route } from "react-router"; 

function App() 
{
  return (
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
  )
}

export default App
