import './App.css';

import { HomePage } from './pages/home-page/HomePage.jsx';
import { AboutPage } from "./pages/about-page/AboutPage.jsx"; // About Page is currently not being used
import { ProjectsPage } from './pages/projects-page/ProjectsPage.jsx';
import { ContactPage } from './pages/contact-page/ContactPage.jsx';
import { Footer } from "./components/footer/Footer.jsx";
import { NotFoundPage } from './pages/not-found-page/NotFoundPage.jsx';
import { Wrapper } from './components/wrapper/Wrapper.jsx';

import { Routes, Route } from "react-router";  
import { useState, useEffect } from 'react';

function MainPage()
{
  const [showWrapper, setShowWrapper] = useState(true);

  const removeWrapper = () =>
  {
    setShowWrapper(false);
  }

  useEffect(() =>
  {
    const timerRemoveWrapper = setTimeout(() =>
    {
      removeWrapper();
    }, 150);

    return () =>
    {
      clearTimeout(timerRemoveWrapper);
    }
  }, []);


  return (
    <>
      {showWrapper && <Wrapper />}
      <HomePage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
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
