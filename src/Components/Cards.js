import React from 'react'
import "./Cards.css"
import one from "../Components/images/first.png"
import two from "../Components/images/two.png"
import three from "../Components/images/card3.png"
import four from "../Components/images/card4.png"
import five from "../Components/images/card5.png"
import six from "../Components/images/card6.png"


const Card = () => {
  return (
    <div className='mt-20 mb-5 flex flex-col'>
        <p class='w-full text-center text-5xl font-medium p-2'>Experience the Benefits of <br/>WhatsApp Integration</p>

      {/* cards container div */}
      <div className='innerDiv1 w-5/6 mx-auto'>
      {/* 1st row */}
      <div className="row mt-5 flex justify-between">
      {/* 1st box */}
      <div className="col-md-4 col-lg-4 col-sm-4 colum1 p-8 bg-pink rounded-xl flex flex-col items-center gap-8">
       <img src={one} alt='first' class='bg-pink'/>
       <div class='text-center'>
        <p className='headingdiv bg-pink'>Increased Sales and <br/> Conversions</p>
        <p className='paradiv bg-pink pt-3'>Utilize WhatsApp's messaging capabilities to nurture leads, drive sales, and improve conversion rates</p>
        </div>
      </div>
      
      {/* 2nd box */}
      <div className="col-md-4 col-lg-4 col-sm-4 colum1 p-8 bg-green rounded-xl flex flex-col items-center gap-8">
    <img src={two} alt='first'/>
    <div class='text-center'>
    <p className='headingdiv bg-green'>Cost-Effective Communication</p>
    <p className='paradiv bg-green'>minimizing expenses associated with traditional channels like phone calls and SMS.</p>
    </div>
     </div>
        
        {/* 3rd box */}
        <div className="col-md-4 col-lg-4 col-sm-4 colum1 p-8 bg-blue rounded-xl flex flex-col items-center gap-8">
    <img src={three} alt='first' class='bg-blue'/>
    <div class='text-center'>
  <p className='headingdiv bg-blue'>Competitive Advantage</p>
    <p className='paradiv bg-blue'>Stay ahead of the competition by embracing innovative communication channels,</p>
    </div>
   </div>
   {/* end of boxes */}
      </div>
      {/* 2nd row */}
      <div className="row mt-5 flex justify-between">
      {/* 1st box */}
      <div className="col-md-4 col-lg-4 col-sm-4 colum1 p-8 bg-light_blue rounded-xl flex flex-col items-center gap-8">
    <img src={four} alt='first' class='bg-light_blue'/>
    <p className='headingdiv bg-light_blue'>Brand Authenticity</p>
    <p className='paradiv bg-light_blue'>Build trust and credibility with customers by using WhatsApp as a communication channel</p>
        </div>

        {/* 2nd box */}
        <div className="col-md-4 col-lg-4 col-sm-4 colum1 p-8 bg-light_pink rounded-xl flex flex-col items-center gap-8">
    <img src={five} alt='first' class='bg-light_pink'/>
    <p className='headingdiv bg-light_pink'>Instant Customer Support</p>
    <p className='paradiv bg-light_pink'>Provide prompt & personalized customer support through WhatsApp, ensuring quick resolution of queries and issues,
    </p>
    </div>

    {/* 3rd box */}
    <div className="col-md-4 col-lg-4 col-sm-4 colum1 p-8 bg-skin rounded-xl flex flex-col items-center gap-8">
    <img src={six} alt='first' class='bg-skin'/>
    <p className='headingdiv bg-skin'>Real-time Notifications</p>
    <p className='paradiv bg-skin'>Send timely notifications and alerts to customers through WhatsApp, keeping them informed about order updates.</p>
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default Card