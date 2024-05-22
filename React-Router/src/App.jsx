import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Red from './components/Red.jsx'
import Blue from './components/Blue.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import MainSection from "./components/MainSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div id="container">
              <Navbar/>
              <MainSection/>
              <Footer/>
          </div>
      </>
  )
}

export default App
