import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { GiGymBag } from "react-icons/gi";
import { fetchData, exerciseOptions, youtubeExerciseOptions} from "../utils/fetchData";
import ExerciseVideos from "../components/ExerciseVideos";
import ExerciseCard from '../components/ExerciseCard';
const ExerciseDetail = () => {
  window.scrollTo({top:0, left:0, behavior:"smooth"})
  
  const {id} = useParams();
  const [exercises, setExercises] = useState({});
  const [youtubeVideo, setYoutubeVideo] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);


  useEffect(() => {
    const exerciseData = async () => {
     const particularExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions );
    //  console.log(particularExerciseData);
     setExercises(particularExerciseData);

     const youtubeExerciseVideoData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${particularExerciseData.name}`, youtubeExerciseOptions );
    //  console.log(youtubeExerciseVideoData.contents);
     setYoutubeVideo(youtubeExerciseVideoData.contents);

     const targetMuscleData= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${particularExerciseData.target}`, exerciseOptions );
    //  console.log(targetMuscleData);
     setTargetMuscle(targetMuscleData);

     const equipmentExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${particularExerciseData.equipment}`, exerciseOptions);
    //  console.log(equipmentExerciseData);
     setEquipmentExercise(equipmentExerciseData);
    }  

    exerciseData();

  }, [id]);

  if(exercises.length === 0){
    return(
      <h1 className='text-4xl flex justify-center items-center w-full h-screen text-center'>Loading.....</h1>
    )
  }

  return (
    <section className='bg-white'>
      <div className="px-7 sm:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-md">
            <img src={exercises.gifUrl} className='w-full' alt="gym" loading='lazy' />
          </div>                            
          <div className="rounded flex flex-col gap-6 justify-center">
            <h2 className='font-medium text-2xl md:text-4xl capitalize'>{exercises.name}</h2>
            <p className='capitalize text-lg text-gray-500 font-medium'>exercises keep you strong {exercises.name} is one of the best exercises to target your {exercises.target} . it will help you improve your mood and energy</p>
           <div className='flex flex-col md:flex-row gap-10'>
            <div><GiGymBag className='rounded-full bg-orange-500 text-7xl p-2 md:p-3 lg:p-4 hover:bg-orange-600 text-white'/> <span className='capitalize text-xl'>{exercises.equipment}</span></div>
            <div><GiGymBag className='rounded-full bg-orange-500 text-7xl p-2 md:p-3 lg:p-4 hover:bg-orange-600 text-white'/> <span className='capitalize text-xl'>{exercises.target}</span></div>
            <div><GiGymBag className='rounded-full bg-orange-500 text-7xl p-2 md:p-3 lg:p-4 hover:bg-orange-600 text-white'/> <span className='capitalize text-xl'>{exercises.bodyPart}</span></div>
           </div>
          </div>
        </div>
      </div>


  <ExerciseVideos youtubeVideo={youtubeVideo} name="related"/>
  <ExerciseCard exercises={targetMuscle} heading="target muscle"/>
  <ExerciseCard exercises={equipmentExercise} heading="equipment muscle"/>

    </section>
  )
}

export default ExerciseDetail