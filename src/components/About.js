import Image from 'next/image'
import React from 'react'
import profileImage from '../../public/images/profile/developer_rony_image.jpg'
import { AnimatedText } from './AnimatedText'

const About = ({id}) => {
  return (
    <div className='flex flex-col w-full mt-16 gap-12 items-center align-middle' id={id}>
      <AnimatedText text="Acerca de mí" className='col-span-2'/>
      <div className='flex justify-center gap-4'>
        <div className='max-w-[28rem]'>
          <p className='mb-2 font-medium'>
            {/*
              Hola, soy desarrollador de aplicaciones móviles para dispositivos Android. 
              Me enfóco en crear soluciones innovadoras y eficientes, siempre buscando formas de mejorar la experiencia del usuario.
            */}

            Hola, soy desarrollador de aplicaciones Web empleando tecnologías como React, Material Design, etc. 
            Me enfóco en crear soluciones innovadoras y eficientes,
            siempre buscando formas de mejorar la experiencia del usuario.
          </p>
          <div>
            <h2 className='text-2xl font-bold'>Experiencia</h2>
            <ListItem 
              position="Desarrollador de Software" 
              time="15/05/2023 - 01/04/2024" 
              company="Portillo Construcciones S.A.C"
              work="Colaboré con el equipo de desarrollo y los stakeholders para garantizar la entrega de funcionalidades y 
              cambios solicitados por el cliente empleando la metodología ágil Scrum.
              Tuve el rol de desarrollador frontend en el proyecto conjunto  el cual
               consistía en el desarrollo e implementación de un CRM"
              technologies={['React','Tailwind','Material UI', 'CSS','DJANGO']}              
            />
            <h2 className='text-2xl font-bold'>Logros académicos</h2>
            <ListItem 
              position="Hackton Innova Sur" 
              time="09/05/2024" 
              company="KOICA"
              work="Finalista del hackton organizado por KOICA-UNSA, encargado de implementar
               las interfaces de usuario del aplicativo móvil empleando el entorno de android y Jetpack Compose."
              technologies={['Jetpack Compose', 'Android', 'AWS']}
            />
          </div>
        </div>
        <div className='col-span-1 relative h-max w-fit rounded-2xl border-2 border-solid border-dark bg-light'>
          <Image src={profileImage} alt='rony' className='w-52 h-auto rounded-2xl'/>
        </div>
      </div>
  </div>  
  )
}

const ListItem = ({position = "", time = "", company = "", work = "", technologies = []}) => {
  return (
    <div className='my-3 flex flex-col gap-1'>
      <h3 className='text-lg font-bold underline'>{position}</h3>
      <h4 className='font-bold text-orange-700'>{company}</h4>
      <h4 className='italic text-sm'>{time}</h4>
      <p className='font-medium'>{work}</p>
      <div className='my-2 -mx-1'>
        {
          technologies.map((item, index)=> <span 
            className='mx-1 bg-dark rounded-lg text-light p-2 text-sm hover:bg-light hover:text-dark border border-solid border-dark cursor-pointer' 
            key={index}
          >
            {item}
          </span>)
        }
      </div>
    </div>
  )
}

export default About
