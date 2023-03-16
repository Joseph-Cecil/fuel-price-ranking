import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Map from "./Map";


function App(){

  return(
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/directions" element={<Map/>} />
      </Routes>
    </Router>
    </div>
  )
}
 export default App;