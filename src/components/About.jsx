import React from 'react';
import Laptop from '../assets/laptop.jpg';
import Abouts from '../assets/about.jpg';

const About = () => {
  return (
    <div name='about'>
      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold '>SlideIt DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Creating Slides is no more a Tedious Task</h1>
            <p>
              With SlideIt you'll be able to create slides of the articles or document you provide. Using NLP we are able to create the abstraction of the topics by the highest sentence ranking and selection.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#cac9c8] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Video Presentation of your Document</h1>
            <p>
              Visualization have an advanced ability to understand, learn, and remember. Generate the video presentations of the slides using speech synthesis will help you to teach or learn documents in no time.
            </p>
          </div>
          <img className='w-[500px] mx-auto my-4' src={Abouts} alt='/' />
        </div>
      </div>
      <div className='w-full py-16 text-white px-8'>
      <div className='max-w mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Sign up to our newsletter and stay up to date.
          </h1>
          <p className='mt-4'>
            Read our{' '}
            <a href='https://www.google.com' className='text-[#00df9a]'>Privacy Policy.
            </a>
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] hover:bg-[#00df98bc] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;