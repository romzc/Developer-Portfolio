import React from 'react'
import { AnimatedText } from './AnimatedText'
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='mt-32'>
      <AnimatedText  text="Proyectos" className=''/>
      <div className='grid grid-cols-2 lg:grid-cols-3 place-content-center gap-4 mt-10'>
        <Card 
          image={""} 
          title="Todo App" 
          description="Todo App desarrolado empleando room database" 
          technologies={["Recycler View", "Room", "XML"]}
        />
        <Card 
          image={""} 
          title="Todo App" 
          description="Todo App desarrolado empleando room database" 
          technologies={["Recycler View", "Room", "XML"]}
        />
        <Card 
          image={""} 
          title="Todo App" 
          description="Todo App desarrolado empleando room database" 
          technologies={["Recycler View", "Room", "XML"]}
        />
      </div>
    </div>
  )
}


const Card = ({ image, title, description, technologies }) => {
  return (
    <div className='w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
      <Image src={image} alt={title} className='w-full h-48 object-cover'/>
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-700 mb-4'>{description}</p>
        <div className='technologies'>
          <h3 className='text-lg font-semibold'>Tecnologías:</h3>
          <ul className='list-disc list-inside'>
            {technologies.map((tech, index) => (
              <li key={index} className='text-gray-600'>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Projects