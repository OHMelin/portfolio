import React from 'react'
import ReactLogo from '../../assets/experience/react.svg'
import Tailwind from '../../assets/experience/tailwind.svg'
import Heart from '../../assets/experience/heart.svg'
import Mui from '../../assets/experience/mui.svg'

const Footer = () => {
  return (
    <div className='pt-32 p-4 flex justify-center'>
      <a className='grayscale has-tooltip w-fit flex justify-center' href='https://github.com/OHMelin/portfolio' target='_blank' rel='noreferrer'>
        <span className='tooltip -mt-10 bg-secondary rounded-md p-1 px-2 justify-center'>Click to visit repository</span>
        Made with 
        <img className='inline-block ml-2' src={Heart} alt="" width={20} />,
        <img className='inline-block mx-2' src={ReactLogo} alt="" width={20} />,
        <img className='inline-block mx-2' src={Mui} alt="" width={20} />
        & 
        <img className='inline-block mx-2' src={Tailwind} alt="" width={20} />
        by OHMelin
      </a>
    </div>
  )
}

export default Footer