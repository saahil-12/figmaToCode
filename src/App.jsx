import { useState } from 'react'
import './App.css'
import Naav from './componentss/Naav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Highlight from './componentss/highlight';
import Catagories from './componentss/catagories';
import Footer from './componentss/footer';



function App() {
  return (
    <>
    <Naav/>
    <Highlight/>
    <Catagories/>
    <Footer/>
    </>
  )
}

export default App
