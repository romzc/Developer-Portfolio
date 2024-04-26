import Link from 'next/link';
import React from 'react'
//import { CircularText } from './Icons'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center
      justify-center overflow-hidden'
    >
      <div className='w-48 h-auto flex items-center justify-center relative'>
        {/*<CircularText text={" Android . Developer . RV ."} className='animate-spin-low'/> */}
        <CircularText text={" Desarrollador . Web . RV ."} className='animate-spin-low'/>
        <Link href='mailto:ronyramos495@gmail.com' className='flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid
        border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark'>
          Contactar
        </Link>
      </div>
    </div>
  )
}

export default HireMe



const CircularText = ({ text, className = ''}) => {
  const radius = 62; // El radio del círculo
  const viewBoxSize = radius * 2;

  return (
    <svg
    width={viewBoxSize}
    height={viewBoxSize}
    viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    className={`circular-text ${className}`}
  >
    <defs>
      <path
        id="circular-path"
        d={`M ${radius},${radius} m -${radius}, 0 a ${radius},${radius} 0 1,0 ${2 * radius},0 a ${radius},${radius} 0 1,0 -${2 * radius},0`}
        fill="none"
        stroke="none"
      />
    </defs>
    <text
      fontSize={24}
      letterSpacing={3}
      fontWeight={'500'}
    >
      <textPath href="#circular-path" startOffset="0%">
        {text}
      </textPath>
    </text>
  </svg>
  );
};
