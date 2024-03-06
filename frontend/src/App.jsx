import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import Home from './pages/Home'
import ListProduct from './pages/ListProduct'
import {MenShopCategory,WomenShopCategory,KidsShopCategory} from './pages/ShopCategory'
import Footer from './components/footer/Footer'
import Detail from './pages/Detail'
import FormCreate from './pages/FormCreate'
import {FormEdit,FormHome } from './pages/FormEdit'
import { Box } from '@mui/material'
const App = () => {
  return (
    <Box style={{overflow:'hidden'}}>
      <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/addProduct' Component={FormCreate}/>
        <Route path='/editProduct/:id' Component={FormHome}/>
        <Route path='/catagory/men' Component={MenShopCategory}/>
        <Route path='/catagory/women' Component={WomenShopCategory}/>
        <Route path='/catagory/kids' Component={KidsShopCategory}/>
        <Route path='/listProduct' Component={ListProduct}/>
        <Route path='/cart' Component={Cart} />
        <Route path='/auth' Component={Auth}/>
        <Route path='/product/:id' Component={Detail}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Box>
  )
}

export default App