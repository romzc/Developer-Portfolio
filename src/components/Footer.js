import React from 'react'
import { Layout } from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; Rights Reserved</span>
        <div className='flex items-center'> 
          Hecho con 
          <span className='text-red-500 text-2xl px-1'>&hearts;</span>
          por&nbsp;<Link href='https://github.com/romzc' target='_blank' className='underline'>Rony Ventura Ramos</Link>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer