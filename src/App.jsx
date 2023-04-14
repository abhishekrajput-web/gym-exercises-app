import React,{useState,useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
    {loading ? (<h1 className='text-4xl flex justify-center items-center w-full h-screen text-center'>Loading.....</h1>) : (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    ) }
    </>
  )
}

export default App;