import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Detail from './pages/Detail'
import Dashboard from './pages/Dashbord'
import PageNotFound from './pages/PageNotFound'
import Navbar from './components/navbar/Navbar'
import { Box } from '@mui/material'
import Form from './pages/Form'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Box sx={{paddingTop:'90px'}}>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/auth' Component={Auth}/>
      <Route path='/dashboard' Component={Dashboard}/>
      <Route path='/add/tour' Component={Form}/>
      <Route path='/edit/:id' Component={Form}/>
      <Route path='/tour/:id' Component={Detail}/>
      <Route path='*' Component={PageNotFound}/>
    </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App