import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({exercises, heading}) => {

if(exercises.length === 0){

return (
  <h1 className='text-4xl flex justify-center items-center w-full h-screen text-center'>No Exercises Found.....</h1>
)
}

  return (
    <section className='pt-32' id='exercises'>
    <div className="px-7 sm:px-14">
    <h2 className='text-2xl sm:text-3xl md:text-5xl text-black capitalize text-center md:text-center border-b-4 border-red-500 sm:border-none mb-20'>{ heading ? ` similar ${heading} exercise` : 'showing Results'}</h2>
    <div className="grid gap-4 md:gap-5 grid-cols-2 lg:grid-cols-3 items-stretch exercise-grid">
      {exercises?.slice(0, 21).map((exercise, id) => (
        <Link to={exercise.id ? `exercise/${exercise.id}` : "" } key={id} className='no-underline rounded-xl'>
      <div className="overflow-hidden bg-white">
          <img src={exercise.gifUrl} className='w-[70%] mx-auto hover:scale-110 transition' alt={exercise.name} loading="lazy" />
          <div className="flex gap-1 flex-row items-center my-8 justify-center">
              <button className='rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-white bg-[#240b36] hover:opacity-90 transition-all'>{exercise.bodyPart.slice(0, 15)}</button>
              <button className='rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-white bg-[#c31432] hover:opacity-90 transition-all'>{exercise.target.slice(0, 15)}</button>
          </div>
          <h2 className='text-base sm:text-xl capitalize text-center font-bold'>{exercise.name.slice(0, 24)}</h2>
      </div>
        </Link>
      ))}
   
    </div>

    </div>
  </section>
  )
}

export default ExerciseCard;