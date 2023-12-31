 
import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './images/Himg1.svg'
import img2 from './images/Himg2.svg'
import img3 from './images/Himg3.svg'
function Hero() {
  return (
    <div class='flex flex-col items-center mt-40'>
    <h1 class='text-5xl font-medium text-center'>Wide Reach Close Connection</h1>
    <p class='text-xl text-light_black opacity-75 text-center mt-6'>The complete support lkit to turn one-time browsers into long-term customers.</p>
    <div class='xl:flex mt-16 xl:justify-between max-xl:flex-col max-xl:items-center w-5/6'>
    {/* 1st div */}
        <div class='relative max-xl:flex max-xl:justify-center'>
        <img src={img1} />
        <div class='bg-white max-w-xs absolute top-2/3 xl:left-[20%] max-xl:left-[40%] rounded-lg p-3 max-xl:mb-8'>
            <h1 class='text-2xl text-grn font-bold bg-white'>Conversational support</h1>
            <p class='bg-white'>Strike up meaningful conversations with personalized chat tools, from Instagram & WhatsApp to live chat.</p>
        </div>
        </div>
        {/* 2nd div */}
        <div class='relative max-xl:flex max-xl:justify-center max-xl:mt-20'>
        <img src={img2}/>
        <div class='bg-white max-w-xs absolute top-2/3 xl:left-[20%] max-xl:left-[40%] rounded-lg p-3'>
            <h1 class='text-2xl text-grn font-bold bg-white'>Marketing Suport</h1>
            <p class='bg-white'>Enable interactive, personalized two-way messaging for customer support and engagement.
            </p>
        </div> 
        </div>
        {/* 3rd div */}
        <div class='relative max-xl:flex max-xl:justify-center max-xl:mt-20'>
       <img src={img3}/>
       <div class='bg-white max-w-xs absolute top-2/3 xl:left-[20%] max-xl:left-[40%] rounded-lg p-3'>           
        <h1 class='text-2xl text-grn font-bold bg-white'>Analytical Support</h1>
            <p class='bg-white'>Measure WhatsApp communication<br/>effectiveness with analytics, gaining insights into customer interactions & engagement metrics.</p>
        </div>
        </div>
        {/* end of div */}
    </div>
    </div>
  )
}

export default Hero;
