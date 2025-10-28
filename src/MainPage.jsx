import { useState, useEffect } from "react";
import { Footer } from "./components/footer/Footer";
import { Message } from "./components/message/Message";
import { Wrapper } from "./components/wrapper/Wrapper";
import { ContactPage } from "./pages/contact-page/ContactPage";
import { HomePage } from "./pages/home-page/HomePage";
import { ProjectsPage } from "./pages/projects-page/ProjectsPage"; 

export function MainPage()
{
  const [showWrapper, setShowWrapper] = useState(true);
  const [showMessage, setShowMessage] = useState(0);

  useEffect(() =>
  {
    const timerRemoveWrapper = setTimeout(() =>
    {
      setShowWrapper(false);
    }, 200);

    return () =>
    {
      clearTimeout(timerRemoveWrapper);
    }
  }, []);


  return (
    <>
      {showWrapper && <Wrapper />}
      <Message showMessage={showMessage}/>
      <HomePage />
      <ProjectsPage />
      <ContactPage setShowMessage={setShowMessage}/>
      <Footer />
    </>
  )
}