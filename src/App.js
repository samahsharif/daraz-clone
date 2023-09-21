import './App.css';
import './responsive.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Pages
import {Home, SingleProduct, Product, Cart} from './pages/index';
// components

import Header from './components/Header';
import Footer from './components/Footer';
import Sell from './components/Sell';
import Affiliate from './components/Affiliate';
import LOGIN from './components/LOGIN';
import SIGNUP from './components/SIGNUP';



function App() {
  return (
   <>
   
   <BrowserRouter>
   <Header />
   <Routes>
   
    <Route path='*' element={<Home />} />
    <Route path='/Sell' element = {<Sell />} />
    <Route path='/Affiliate' element = {<Affiliate />} />
    <Route path='/Cart' element ={<Cart/>} />
    <Route path='/LOGIN' element = {<LOGIN />} />
    <Route path='/SIGNUP' element = {<SIGNUP />} />
    <Route path="/Product" element={<Product/>} />
    <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
   </Routes>
   <Footer />
   </BrowserRouter>

   </>
  )
}

export default App;








    