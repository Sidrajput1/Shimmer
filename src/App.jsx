import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Nav from './components/Nav'
import BeforeHome from './components/First/BeforeHome'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import Footer from './components/Footer'
import Contact from './components/Contact'
import ProjectPage from './components/home/ProjectPage'

import Hero from './components/webdev/Hero'
import Service from './components/about/Service'
import PortfolioHero from './components/pf/PortfolioHero'
import ScrollToTop from './components/ScrollToTop'
import HeroApp from './components/webdev/HeroApp'

function App() {
  

  return (
    <>
    <Nav/>
   
    <ScrollToTop/>
     <Routes>
      <Route path='/' element={<BeforeHome/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/projects' element={<ProjectPage/>}></Route>
      <Route path='/web-dev' element={<Hero/>}></Route>
      <Route path='/services' element={<Service/>}></Route>
      <Route path='/portfolio' element={<PortfolioHero/>}></Route>
      <Route path='/app-development' element={<HeroApp/>}></Route>

     </Routes>
     <Footer/>
    </>
  )
}

export default App