function Form() {
    return (
      <div className="bg-light_grn border-t border-light_grn rounded-t-full mt-36">
        {/* 1st container */}
        <div className="bg-light_grn flex flex-col items-center pt-24 pb-16 gap-8">
          <div className="bg-light_grn">
            <h1 className="bg-light_grn text-5xl font-normal text-grn">Ready to get started?</h1>
            <p className="bg-light_grn text-lg pt-8 text-center">Create your free account, no credit card needed.</p>
          </div>
          <button className="px-5 py-3 bg-grn text-white rounded-xl text-xl">Get Conversa</button>
        </div>
        {/* 2nd container */}
        <div class='bg-grn py-20'>
        <div class='bg-grn flex flex-col items-center gap-8'>
            <h1 class='bg-grn text-white text-5xl font-medium'>Get in Touch</h1>
            <textarea placeholder="Write your message*" class='w-5/6 min-h-[200px] p-8 rounded-lg'/>
            {/* input field */}
            <div class='bg-grn w-5/6 flex justify-between gap-20 '>
                <input type='text' placeholder='Name*' class='w-1/2 p-3 rounded-lg'/>
                <input type='email' placeholder='Email*' class='w-1/2 p-3 rounded-lg'/>
            </div>
            <div class='bg-grn w-5/6 flex justify-between gap-20'>
            <input type='text' placeholder='Company Name' class='w-1/2 p-3 rounded-lg'/>
            <input type='text' placeholder='Contact Number*' class='w-1/2 p-3 rounded-lg'/>
            </div>
            <button class='px-14 py-4 w-5/6 rounded-2xl border border-white text-white'>Book A Demo</button>
        </div>

        </div>
      </div>
    );
  }
  
  
  export default Form;