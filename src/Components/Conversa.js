import star from './images/Star.svg'
import girl from './images/girl.svg'
import curve from './images/curve.svg'
function Conversa() {
    return (
      <div class='flex w-5/6 mt-32 justify-between mx-auto gap-6 bg-bg'>
        {/* 1st div */}
        <div class='w-2/5 flex flex-col justify-evenly'>
        <h1 class='text-5xl text-grn'>Everyone can grow with Conversa</h1>
<div>
        <ul class='text-2xl flex flex-col gap-4'>
            <li class='flex gap-4'><img src={star}/><h1>Startups</h1></li>
            <li class='flex gap-4'><img src={star}/><h1>Agencies</h1></li> 
            <li class='flex gap-4'><img src={star}/><h1>Ecommerce</h1></li>
             <li class='flex gap-4'><img src={star}/><h1>Developers</h1></li>
        </ul>
        </div>
            <div>
            <button class='bg-grn text-white rounded-xl px-5 py-3'>Request a demo</button>
            </div>
        </div>

        {/* 2nd div */}
        <div class='w-3/5'>
           <div class='flex justify-end'><div class='w-3/4 text-2xl rounded-[32px] p-12 text-grn bg-light_grn border-2 border-grn'>"Convera’’ is fantastic for keeping clients informed of upcoming shoots and the status of portrait collections. Plus, it offers great deliverability!"</div> 
           </div> {/* curve */}
           <div class='flex'>
           <img src={girl} class='mt-[10%]'/>
           <div class='flex items-start'><img src={curve}/></div>
           </div>
           {/* img */}
           {/* box text */}
         <div class='flex'>
         <div class='bg-light_grn border-2 border-grn w-2/5 text-center rounded-full p-2 mt-6 '>Sarah Roy, Business Analyst</div>
         </div>  
        </div>
      </div>
    )
  }
  
  export default Conversa;