import logo from './images/logo.svg'
import fb from './images/fb.svg'
import twitter from './images/twitter.svg'
import whatsapp from './images/instagram.png'
import linkedin from './images/linkedin.svg'

function Footer() {
    return (
        <>
      <div class='mt-12 flex justify-center'>
      <div class='flex lg:justify-between lg:items-start max-lg:flex-col max- w-5/6 border-b border-black border-opacity-25'>
        {/* img */}
     
        {/* info */}
        <div class='lg:w-1/2 w-full flex justify-between'>
       <div><img src={logo}/></div> 
        <div class='w-2/3'>
        <h1 class='text-xl font-normal'>Conversa is a WhatsApp CRM built on Official WhatsApp Business (WhatsApp Business API Provider )</h1>
            <p class='py-3'> (434) 546-4356 </p>
            <p class='pb-8'>convers@lift.com</p>
        </div>

        </div>
        {/* links */}
        <div class='lg:w-1/5 w-3/4 flex lg:justify-between max-lg:justify-around max-lg:text-lg'>
        {/* 1st div */}
            <div>
                <ul class='lg:text-sm opacity-75 flex flex-col gap-2'>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact </li>
                    <li class='underline'> Whatsapp Link & <br/> Generator</li>
                    <li>Legal</li>
                </ul>
            </div>
        {/* 2nd div */}
            <div>                
            <ul  class='lg:text-sm opacity-75 flex flex-col gap-2'>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkedin </li>
                    <li> Instagram </li>

                </ul></div>
        </div>
       
      </div>
      </div>
      <div class='text-center p-4 text-sm opacity-[65]'>© 2023Lift Media. All rights reserved.</div>

    <div class='hidden'>
        <img src={fb}/>
        <img src={twitter}/>
        <img src={whatsapp}/>
        <img src={linkedin}/>

    </div>
      </>
    )
  }
  
  export default Footer;
  