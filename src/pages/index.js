import { Layout } from '@/components/Layout'
import Head from 'next/head'
import profilePic from "../../public/images/profile/android_pic_image.png"
import Image from 'next/image'
import { AnimatedText } from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Projects from '@/components/Projects'


export default function Home() {
  return (
    <>
      <Head>
        <title>Romzc</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full' id="inicio">
            <div className='w-1/2'>
              <Image src={profilePic} alt="Rony Ventura" className="w-full h-auto"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
             <h3> Rony Ventura Ramos | {/*Android Developer*/} Desarrollador Web <br /> 
              <a className='text-center font-semibold' href='https://www.frontendmentor.io/profile/romzc' target='_blank'>
                Perfil: Frontend Mentor
              </a>
              </h3> 
              <AnimatedText text={"Transformar ideas en realidad."} className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
                {/*
                  Como desarrollador de aplicaciones móviles, me apasiona transformar
                  ideas innovadoras en soluciones prácticas y funcionales. Mi experiencia
                  en el desarrollo de aplicaciones para la plataforma Android
                  me permite crear productos digitales con interfaces intuitivas. 
                */}
                  Como desarrollador web, me apasiona convertir ideas innovadoras en soluciones prácticas
                  y funcionales en el mundo digital. Me enfoco en crear productos digitales con interfaces intuitivas y experiencias de
                  usuario fluidas. Estoy comprometido en aprovechar las últimas tecnologías y tendencias
                  del desarrollo web para ofrecer resultados excepcionales a mis clientes y usuarios finales.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link className='text-lg font-semibold hover:bg-light hover:text-dark
                  flex items-center bg-dark text-light p-2.5 px-6 rounded-lg
                  border border-solid border-transparent hover:border-dark'
                  href="/CV_RONY_2.pdf" 
                  target='_blank'
                >
                  CV
                  <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link 
                  href="mailto:ronyramos495@gmail.com" 
                  target='_blank'
                  className='ml-4 text-lg font-medium capitalize text-dark underline'
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
          <About id="about"/>
          <Skills /> 
          <Projects id="projects"/>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='Romzc' className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
