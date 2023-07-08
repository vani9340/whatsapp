function Form() {
    return (
      <div className="bg-light_grn border-t border-light_grn rounded-t-full mt-36">
        {/* 1st container */}
        <div className="bg-light_grn">
          <div className="bg-light_grn">
            <h1 className="bg-light_grn">Ready to get started?</h1>
            <p className="bg-light_grn">Create your free account, no credit card needed.</p>
          </div>
          <button className="px-5 py-3 bg-grn text-white rounded-xl text-xl">Get Conversa</button>
        </div>
        {/* 2nd container */}
        <div class='bg-grn'>
        <div class='bg-grn'>
            <h1>Get in Touch</h1>
            <textarea placeholder="Write your message*"/>
            {/* input field */}
            <div>
                <input/>
                <input/>
            </div>
            <div>
                <input/>
                <input/>
            </div>
        </div>

        </div>
      </div>
    );
  }
  
  
  export default Form;