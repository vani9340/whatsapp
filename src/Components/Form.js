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
        <div class='bg-grn '>
        <div class='bg-grn flex flex-col items-center'>
            <h1 class='bg-grn '>Get in Touch</h1>
            <textarea placeholder="Write your message*"/>
            {/* input field */}
            <div class='bg-grn'>
                <input type='text' placeholder='Name*'/>
                <input type='email' placeholder='Email*'/>
            </div>
            <div class='bg-grn'>
            <input type='text' placeholder='Company Name'/>
            <input type='text' placeholder='Contact Number*'/>
            </div>
            <button class='px-14 py-4 w-5/6 rounded-2xl border border-white text-white'>Book A Demo</button>
        </div>

        </div>
      </div>
    );
  }
  
  
  export default Form;