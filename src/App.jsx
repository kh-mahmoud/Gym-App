import { useState } from 'react'
import './App.css';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';


function App() {


  return (
    <Box className="App w-screen" sx={{width:{xl:"1488px"}}} m="auto" width={"400px"}>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/exercise/:id" element={<ExerciseDetail/>} />
          </Routes>
        <Footer />
    </Box>
  )
}

export default App
