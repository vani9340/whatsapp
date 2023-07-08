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
    <div className='container box mt-5 mb-5'>
        <p class='w-1/2 text-center text-5xl font-medium'>Experience the Benefits of WhatsApp Integration</p>

      {/* cards container div */}
      <div className='innerDiv1'>
      <div className="row mt-5">
    <div className="col-md-4 col-lg-4 col-sm-4 colum1" style={{backgroundColor:'#FDF3EA'}} >
        <img src={one} alt='first'/>
        <p className='headingdiv'>Increased Sales and Conversions</p>
        <p className='paradiv'>Utilize WhatsApp's messaging capabilities to nurture leads, drive sales, and improve conversion rates</p>
        </div>
    <div className="col-md-4 col-lg-4 col-sm-4 colum1" style={{backgroundColor:'#E0F8F2'}}>
    <img src={two} alt='first'/>
    <p className='headingdiv'>Cost-Effective Communication</p>
    <p className='paradiv'>minimizing expenses associated with traditional channels like phone calls and SMS.</p>
        </div>
    <div className="col-md-4 col-lg-4 col-sm-4 colum1" style={{backgroundColor:'#EEECFF'}}>
    <img src={three} alt='first'/>
    <p className='headingdiv'>Competitive Advantage</p>
    <p className='paradiv'>Stay ahead of the competition by embracing innovative communication channels,</p>
        </div>
      </div>
      <div className="row mt-5">
    <div className="col-md-4 col-lg-4 col-sm-4 colum2" style={{backgroundColor:'#D9F2F7'}}>
    <img src={four} alt='first'/>
    <p className='headingdiv'>Brand Authenticity</p>
    <p className='paradiv'>Build trust and credibility with customers by using WhatsApp as a communication channel</p>
        </div>
    <div className="col-md-4 col-lg-4 col-sm-4 colum2" style={{backgroundColor:'#FAEDED'}}>
    <img src={five} alt='first'/>
    <p className='headingdiv'>Instant Customer Support</p>
    <p className='paradiv'>Provide prompt & personalized customer support through WhatsApp, ensuring quick resolution of queries and issues,
</p>
        </div>
    <div className="col-md-4 col-lg-4 col-sm-4 colum2" style={{backgroundColor:'#F1F1F1'}}>
    <img src={six} alt='first'/>
    <p className='headingdiv'>Real-time Notifications</p>
    <p className='paradiv'>Send timely notifications and alerts to customers through WhatsApp, keeping them informed about order updates.</p>
        </div>
      </div>
      </div>
    
    </div>
  )
}

export default Card