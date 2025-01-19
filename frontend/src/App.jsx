import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from './components/NotFound';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />}>
        <Route path="/home" element={<Home />}></Route>
          {/* <Route path="pomodoro" element={<Pomodoro />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
