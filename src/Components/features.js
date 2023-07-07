import React from "react";
import "./features.css";
import one from "./images/spyware-detection-loading.png";
import two from "./images/customer-support.png";
import three from "../Components/images/mail.png";
import four from "../Components/images/verified1.png";
import five from "../Components/images/workflow.png";
import six from "./images/translate.png";
function Feature() {
  return (
    <div class='bg-yellow mt-40 flex flex-col'>
      <div className="text-4xl bg-yellow text-center pt-20">Top Features</div>
      {/* row1 */}
      <div class='bg-yellow mb-32 mt-20'>
      <div className="w-5/6 mx-auto bg-white rounded-[48px] py-16 ">
            {/* row1 */}
        <div className=" bg-white flex justify-between">

        {/* rows box 1 */}
          <div className=" bg-white flex flex-col items-center gap-6">
            <img src={one} alt="first" class='bg-white'/>
            <p style={{  fontSize: "19px", fontWeight: "700"}} class='bg-white'>
              Automated Notifications
            </p>
            <p style={{margin: "auto",fontSize: "16px"}} class='bg-white w-3/4 text-center'> Set up automated notifications and alerts to keep your customers
              informed about important updates </p>
          </div>

          {/* box2 */}
          <div className=" bg-white flex flex-col items-center gap-6">
            <img src={two} alt="first" class='bg-white'/>
            <p  class='bg-white text-lg font-bold'>Documentation & Support </p>
            <p class='bg-white w-3/4 text-center'>
              Provide comprehensive documentation and developer resources to facilitate easy integration 
            </p>
          </div>

          {/* box3 */}
          <div className=" bg-white flex flex-col items-center gap-6">
            <img src={three} alt="first" class='bg-white'/>
            <p style={{  fontSize: "19px", fontWeight: "700"}} class='bg-white'>
            Secure and Reliable
            </p>
            <p style={{margin: "auto",fontSize: "16px"}} class='bg-white w-3/4 text-center'>
              We Ensure the security and privacy of customer. Offer a reliable service with high message deliverability rates
            </p>
          </div>
        </div>
        {/* row2 */}
        <div className=" bg-white flex justify-between gap-4 mt-24">
        {/* box1 */}
        <div className=" bg-white flex flex-col items-center gap-6">
            <img src={four} alt="first" class='bg-white'/>
            <p style={{  fontSize: "19px", fontWeight: "700"}} class='bg-white'>
            Workflow Automation
            </p>
            <p
              style={{
                margin: "auto",
                fontSize: "16px",
                }} class='bg-white w-3/4 text-center'
            >
                Automates various workflows and processes within your WhatsApp integration, such as order confirmations.
            </p>
          </div>
          {/* box2 */}
          <div className=" bg-white flex flex-col items-center gap-6">
            <img src={five} alt="first" class='bg-white'/>
            <p style={{  fontSize: "19px", fontWeight: "700"}} class='bg-white'>
            Multi-language Support
            </p>
            <p
              style={{
                margin: "auto",
                fontSize: "16px",
                
              }}class='bg-white w-3/4 text-center'
            >
              We Offer support for multiple languages within your WhatsApp integration service
            </p>
          </div>
          {/* box3 */}
          <div className=" bg-white flex flex-col items-center gap-6">
            <img src={six} alt="first" class='bg-white'/>
            <p style={{fontSize: "19px", fontWeight: "700"}} class='bg-white text-center'>
            Template Messages
            </p>
            <p
              style={{ fontSize: "16px"}}
              class='bg-white w-3/4 text-center'>
              Utilize pre-approved template messages to send standardized notifications, reminders, updates, ensuring compliance
            </p>
          </div>
      
        </div>
        {/* button */}
        <div className="butndiv bg-white flex justify-center my-6">
          <button className="btn btn-success butn">Start a free trial</button>
        </div>
      </div>
      </div>
 
    </div>
  );
};
  
  export default Feature;
  