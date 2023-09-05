import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import "./fonts/BasisGrotesqueArabicPro-Regular.ttf"
import { Routes,Route } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={<Body/>} />
          <Route path='/restaurantMenu/:id' element={<RestaurantMenu />} />
        </Routes>
        <Footer/>
        
      
    </>
  )
}

export default App
