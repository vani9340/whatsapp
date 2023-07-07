import img1 from './images/img1.svg'
function Integration() {
  return (
    <div class='flex justify-between w-5/6 mx-auto mt-16 '>
     <div class='flex flex-col justify-center gap-2'>
     <div>
     <h1 class='capitalize text-grey'>EMPOWER . STREAMLINE . CONNECT</h1>
     </div>
     <div class='h-1/2'>
     <h1 class='font-bold text-5xl py-3'>Simplify Business<h1 class='py-3'>Communication with</h1><h1 class='text-grn'>WhatsApp Integration</h1> </h1>
     </div>
        <div class='flex gap-4'>
            <button class='bg-grn text-white py-5 px-16 rounded-2xl  text-2xl font-bold'>Try it for free</button>
            <button class='rounded-2xl border-gray-800 border-2 py-5 px-16 text-2xl font-bold'>Book A Demo</button>
        </div>
     </div>
     <div>
     <img src={img1}/>
     </div>
    </div>
  )
}

export default Integration;
