import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profileImage from '../../public/images/profile/developer_rony_image.jpg'
import Skills from '@/components/Skills'

const about = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Romzc | Acerca de</title>
      </Head>
      <main>
        <Layout>
          <AnimatedText text="La pasión alimenta el propósito" className='mb-16'/>
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Acerca de mí</h2>
              <p className='mb-2 font-medium'>
                Hola, soy desarrollador de aplicaciones móviles para dispositivos Android. 
                Me enfóco en crear soluciones innovadoras y eficientes, siempre buscando formas de mejorar la experiencia del usuario.
              </p>
            </div>
            <div className='col-span-3 relative h-max w-fit rounded-2xl border-2 border-solid border-dark
            bg-light'>  
              <Image src={profileImage} alt='rony' className='w-52 h-auto rounded-2xl'/>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </React.Fragment>
  )
}

export default about