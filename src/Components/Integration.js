import img1 from './images/img1.svg';

function Integration() {
  return (
    <div className='flex flex-col lg:flex-row justify-between w-5/6 mx-auto mt-16 bg-default'>
      <div className='flex flex-col justify-center gap-4 lg:w-1/2'>
        <div>
          <h1 className='capitalize text-grey'>EMPOWER . STREAMLINE . CONNECT</h1>
        </div>
        <div class='max-sm:text-2xl font-bold xl:text-5xl sm:text-4xl'>
          <h1 class='py-3'>Simplify Business</h1>
          <h1 className='pb-3'>Communication with</h1>
          <h1 className=' text-grn'>WhatsApp Integration</h1>
        </div>
        <div className='flex flex-col lg:flex-row gap-4'>
          <button className='bg-grn text-white py-4 px-8 rounded-2xl text-2xl font-bold'>Try it for free</button>
          <button className='rounded-2xl border-gray-800 border-2 py-4 px-8 text-2xl font-bold'>Book A Demo</button>
        </div>
      </div>
      <div className='lg:w-1/2 lg:order-last'>
        <img src={img1} alt='Integration' className='w-full' />
      </div>
    </div>
  );
}

export default Integration;



//  <div class='flex justify-between w-5/6 mx-auto mt-16  bg-default'>
{/* <div class='flex flex-col justify-center gap-2'>
<div>
<h1 class='capitalize text-grey'>EMPOWER . STREAMLINE . CONNECT</h1>
</div>
<div class='h-1/2'>
<h1 class='font-bold text-5xl py-3'>Simplify Business<h1 class='py-3'>Communication with</h1><h1 class='text-grn'>WhatsApp Integration</h1> </h1>
</div>
   <div class='flex gap-4'>
       <button class='bg-grn text-white py-4 px-16 rounded-2xl  text-2xl font-bold'>Try it for free</button>
       <button class='rounded-2xl border-gray-800 border-2 px-16 text-2xl font-bold'>Book A Demo</button>
   </div>
</div>
<div>
<img src={img1}/>
</div>
</div>
)
} */}
