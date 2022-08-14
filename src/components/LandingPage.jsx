import React from 'react';
import Typed from 'react-typed';
import LandingPageVideo from '../assets/landingvideo.mp4'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Link } from 'react-scroll'
import { Link as RouteLink} from 'react-router-dom';

const LandingPage = () => {
  return (
    <div name='home' className=' w-full h-screen top-[90px] text-white'>
      <video className='object-cover h-full w-full absolute opacity-20' src={LandingPageVideo} autoPlay loop muted />
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] z-10 font-bold p-2'>
          Make it WORK. Make it WORTH.
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl z-10 font-bold md:py-6'>
          Getting things done.
        </h1>
        <div className='flex z-10 justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
            Fast, flexible tool for your
          </p>
          <Typed
          className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-1 text-[#00df9a]'
            strings={['Slides', 'Videos']}
            typeSpeed={50}
            backSpeed={80}
            loop
          />
        </div>
        <p className='md:text-2xl z-10 text-m font-bold text-gray-500'>Generate the abstract/summarized view of your long lengthy documents in One Click.</p>
        <RouteLink to='/signin' className='z-10'><button className='bg-[#00df9a] w-[200px] z-10 rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button></RouteLink>
      </div>
      <div className='absolute bottom-6 justify-center items-center flex text-xs inset-x-0 text-gray-200'>
            <Link to="about" smooth={true} offset={50} duration={500}>
                <button className='flex justify-center items-center'>Scroll Down<span><AiOutlineArrowDown size={20} /></span></button>
            </Link>
      </div>
    </div>
  );
};

export default LandingPage;