import React from 'react'
import { AnimatedText } from './AnimatedText'
import Image from 'next/image';
import githubIcon from "./../../public/images/github-mark-white.png"
import quizzicalImage from './../../public/projects/quizzical_image.webp'
import todoImage from '../../public/projects/todo_web.webp'
import dictionaryApp from '../../public/projects/dictionary_app.webp'
import ecommerProduct from '../../public/projects/product_image.webp'
import previewCard from './../../public/projects/peview_card.webp'
import portilloPage from './../../public/projects/portillo.webp'

const Projects = ({id}) => {
  return (
    <div className='mt-32' id={id}>
      <AnimatedText  text="Proyectos" className=''/>
      <div className='grid grid-cols-2 lg:grid-cols-3 place-content-center gap-4 mt-10'>
        
        <Card 
          image={portilloPage } 
          title="CRM - Inmobiliaria Portillo" 
          description="Sistema CRM implementado para la empresa Portillo S.A.C." 
          technologies={["JavaScript", "React", "Django", "Jest", "Postgresql", 'Axios', 'Material UI', 'Zustand']}
          repository={"https://github.com/portilloERP/ERP_PORTILLO"}
          url={"https://erp.portillo.org.pe/"}
        />

        <Card 
          image={quizzicalImage} 
          title="Quizzical" 
          description="Aplicación para responder preguntas acerca de computación" 
          technologies={["React", "Javascript", "JSON", "CSS"]}
          url={"https://cheery-torrone-e7b2bf.netlify.app/"}
          repository={"https://github.com/romzc/quizzical-project"}
        />
        <Card 
          image={todoImage} 
          title="Todo App" 
          description="Aplicación TODO, realizada como reto de la plataforma Frontend Mentor"
          technologies={["React", "Mobile First", "CSS", "Webpack"]}
          repository={"https://github.com/romzc/todo-app"}
          url={"https://astonishing-sopapillas-d9af81.netlify.app/"}
        />
        <Card 
          image={dictionaryApp} 
          title="Dictinary App" 
          description="Aplicación diccionario que permite buscar palabras en ingles y conocer su significado" 
          technologies={["CSS", "React", "HTML", "Vite", "BEM"]}
          repository={"https://github.com/romzc/dictionary-app"}
          url={"https://resonant-crostata-aeb9a1.netlify.app/"}
        />
        <Card 
          image={ecommerProduct} 
          title="Ecommerce Product Page" 
          description="Pagina web que muestra la vista detalle de un producto" 
          technologies={["JavaScript", "React", "Mobile First", "Vite", "CSS"]}
          repository={"https://github.com/romzc/ecommerce-product"}
          url={"https://peppy-churros-5d08ae.netlify.app/"}
        />
        <Card 
          image={previewCard} 
          title="Product Preview Card" 
          description="Vista previa de un producto en formato Card" 
          technologies={["JavaScript", "React", "Mobile First", "Webpack", "CSS"]}
          repository={"https://github.com/romzc/product-preview-card-component"}
          url={"https://eclectic-duckanoo-669578.netlify.app/"}
        />
        
      </div>
    </div>
  )
}


const Card = ({ image, title, description, technologies, url, repository }) => {
  return (
    <div className='w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
      <a href={url} target='_blank'>
      <Image src={image} alt={title} className='w-full h-48 object-cover cursor-pointer'/>
      </a>
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-700'>{description}</p>
        <a href={repository} target='_blank' className='mb-4'>
          Repo: <Image src={githubIcon} alt='Repository' className='bg-black w-6 rounded-sm inline'/>
        </a>
        <div className='technologies'>
          <h3 className='text-base font-semibold'>Tecnologías: </h3>
          <ul className='flex gap-2 flex-wrap'>
            {technologies.map((tech, index) => (
              <li 
                key={index} 
                className='bg-dark text-light p-1 text-sm rounded-lg shadow-lg '
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Projects