import './App.css';

import { Header } from './components/header/Header';
import { LandingPage } from './pages/landing-page/LandingPage';
import { AboutPage } from "./pages/about-page/AboutPage";
import { NotFoundPage } from './pages/not-found-page/NotFoundPage';
import { Routes, Route } from "react-router";  

function MainPage()
{
  return (
    <>
      <LandingPage />
      <AboutPage />
    </>
  )
}

function App() 
{
  return (
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
  )
}

export default App
