import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import "./fonts/BasisGrotesqueArabicPro-Regular.ttf"
import { Routes,Route } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'
import { Provider } from 'react-redux'
import store from './store'
import Cart from './components/Cart'

function App() {

  return (
    <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/' element={<Body/>} />
          <Route path='/restaurantMenu/:id' element={<RestaurantMenu />} />
        </Routes>
        <Footer/>
    </Provider>
  )
}

export default App
