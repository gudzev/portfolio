import './App.css';

import { HomePage } from './pages/home-page/HomePage';
import { AboutPage } from "./pages/about-page/AboutPage";
import { ProjectsPage } from './pages/projects-page/ProjectsPage';
import { ContactPage } from './pages/contact-page/ContactPage';
import { Footer } from "./components/footer/Footer";
import { NotFoundPage } from './pages/not-found-page/NotFoundPage';
import { Wrapper } from './components/wrapper/wrapper';

import { Routes, Route } from "react-router";  
import { useState, useEffect } from 'react';

function MainPage()
{
  const [showWrapper, setShowWrapper] = useState(true);

  const removeWrapper = () =>
  {
    setTimeout(() =>
    {
      setShowWrapper(false);
    }, 100)
  }

  useEffect(() =>
  {
    if(document.readyState == "complete")
    {
      removeWrapper();
    }
    else
    {
      document.addEventListener("DOMContentLoaded", removeWrapper);

      return () =>
      {
        document.removeEventListener("DOMContentLoaded", removeWrapper);
      }
    }
  }, []);


  return (
    <>
      {showWrapper && <Wrapper />}
      <HomePage />
      <AboutPage />
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
