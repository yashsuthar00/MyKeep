import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="pomodoro" element={<Pomodoro />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
