import React from 'react'
import Banner from '../layouts/Banner'
import Services from './Service'
import About from './About'
import Myprotfolio from './Myprotfolio'
import Contact from './Contact'


const Home = () => {
  return (
   <>
   <Banner/>
  <About/>
  <Services/>
  <Myprotfolio/>
  <Contact/>
  
   
   </>
  )
}

export default Home