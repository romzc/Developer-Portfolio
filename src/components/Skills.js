import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <React.Fragment>
      <h2 className='font-bold text-8xl mt-28 mb-2 w-full text-center'>Habilidades</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div 
          className='flex items-center justify-center rounded-full font-semibold
           bg-dark text-light p-8 shadow-dark cursor-pointer'
           whileHover={{scale: 1.05}}
        >
          Android
        </motion.div>
        <Skill name='1. Room Database' x="-12vw" y="-20vw"/>
        <Skill name='2. Jetpack Compose' x="-10vw" y="-10vw"/>
        <Skill name='3. Retrofit' x="8vw" y="-16vw"/>
        <Skill name='4. Git' x="-10vw" y="10vw"/>
        <Skill name='5. Github' x="10vw" y="10vw"/>
        <Skill name='6. XML' x="20vw" y="-15vw"/>
        <Skill name='7. Recycler views' x="20vw" y="0vw"/>
        <Skill name='8. Kotlin' x="20vw" y="-10vw"/>
        <Skill name='9. Android Studio' x="-32vw" y="0vw"/>
        <Skill name='10. MVVM' x="-20vw" y="0vw"/>
        <Skill name='11. Firebase' x="20vw" y="-20vw"/>
        <Skill name='12. Java' x="-28vw" y="-10vw"/>
        <Skill name='13. Figma' x="-28vw" y="-16vw"/>
      </div>

    </React.Fragment>
  )
}


const Skill = ({name, x, y}) => {
  return (
    <motion.div 
      className='flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer
        absolute'
        whileHover={{scale: 1.05}}
        initial={{x: 0, y: 0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5}}
        viewport={{ once: true}}
    >
      {name}
    </motion.div>
  )
}

export default Skills