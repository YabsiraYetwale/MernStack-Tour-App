import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Tours from '../components/tours/Tours'
import { fetchTours } from '../redux/actions/tours'
const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchTours())
  },[dispatch])
  return (
    <>
    <Tours/>
    </>
  )
}

export default Home