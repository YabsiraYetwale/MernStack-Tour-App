import React from 'react'
import Hero from '../components/hero/Hero'
import Women from '../components/popular/womenpopular/Women'
import Offer from '../components/offer/Offer'
import NewsLetter from '../components/newsLetter/NewsLetter'
import NewCollections from '../components/newcollection/NewCollections'
import { Box } from '@mui/material'
const Home = () => {
  return (
    <>
    <Box sx={{display:'flex',
    flexDirection:'column',
    gap:'100px',}}>
    <Hero/>
    <Women/>
    <Offer/>
    <NewCollections/>
    <NewsLetter/>
    </Box>
    </>
  )
}

export default Home