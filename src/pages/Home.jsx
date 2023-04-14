import React, {useState} from 'react';
import BannerImg from "../assets/images/banner.png";
import SearchInput from '../components/SearchInput';
import ExerciseCard from '../components/ExerciseCard';

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <>
      <section id='home' className='px-7 sm:px-14 pt-20 bg-gray-800'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div>
            <h1 className='text-white font-semibold text-6xl md:text-5xl lg:text-6xl xl:text-7xl uppercase heading  '> Accept the<span className='text-green-600'> Challenge </span> <br /> to be fit </h1>
            <button className="rounded font-sm px-7 py-3 font-medium mt-8 border-2 border-blue-500 text-white hover:bg-blue-600 hover:text-white ">MAKE YOUR WAY</button>
          </div>
          <div>
            <img src={BannerImg} alt="banner-img" className='w-full rounded bg-yellow-500 ' />
          </div>
        </div>
      </section>
      
        <SearchInput setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <ExerciseCard exercises={exercises} bodyPart={bodyPart} setExercises={setExercises} />        
    </>

  )
}

export default Home