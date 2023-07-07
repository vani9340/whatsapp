import logo from './images/logo.svg'
function Nav() {
  return (
    <div class='flex justify-between w-5/6 items-center text-xl mt-9 mx-auto'>
    <div>
    <img src={logo}/>
    </div>

   <div class='flex gap-5 items-center'>
    <h1>Features</h1>
    <h1>Pricing</h1>
    <h1>Resources</h1>
   </div>

   <div class='flex gap-4'>
    <button>Login</button>
    <button class='text-[#ffffff] px-5 py-3 bg-grn rounded-xl'>Sign Up</button>
   </div>

    </div>

  );
}

export default Nav;