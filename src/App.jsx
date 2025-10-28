import './App.css';

import { Routes, Route } from "react-router";  
import { MainPage } from "./MainPage";
import { NotFoundPage } from "./pages/not-found-page/NotFoundPage";

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
