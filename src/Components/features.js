import React from "react";
import "./Main.css";
import one from "./images/spyware-detection-loading.png";
import two from "./images/customer-support.png";
import three from "../Components/images/mail.png";
import four from "../Components/images/verified1.png";
import five from "../Components/images/workflow.png";
import six from "./images/translate.png";
function Feature() {
  return (
    <div className="container mt-4 mb-4 maindiv">
      <p className="headingText mt-5">Top Features</p>
      <div className="container innerdiv">
        <div className="row columnWise">
          <div className="col-lg-4 col-md-4 col-sm-4 colom">
            <img src={one} alt="first" />
            <p style={{  fontSize: "19px", fontWeight: "700",marginTop:'10px' }}>
              Automated Notifications
            </p>
            <p
              style={{
                height: "88px",
                width: "263px",
                margin: "auto",
                fontSize: "16px",
                
              }}
            >
              Set up automated notifications and alerts to keep your customers
              informed about important updates
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 colom">
            <img src={two} alt="first" />
            <p style={{  fontSize: "19px", fontWeight: "700",marginTop:'10px' }}>
            Documentation & Support
            </p>
            <p
              style={{
                height: "88px",
                width: "263px",
                margin: "auto",
                fontSize: "16px",
                
              }}
            >
              Provide comprehensive documentation and developer resources to facilitate easy integration 
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 colom">
            <img src={three} alt="first" />
            <p style={{  fontSize: "19px", fontWeight: "700",marginTop:'10px' }}>
            Secure and Reliable
            </p>
            <p
              style={{
                height: "88px",
                width: "263px",
                margin: "auto",
                fontSize: "16px",
               
              }}
            >
              We Ensure the security and privacy of customer. Offer a reliable service with high message deliverability rates
            </p>
          </div>
        </div>
        <div className="row columnWise2">
          <div className="col-lg-4 col-md-4 col-sm-4 colom">
            <img src={four} alt="first" />
            <p style={{  fontSize: "19px", fontWeight: "700",marginTop:'10px' }}>
            Workflow Automation
            </p>
            <p
              style={{
                height: "88px",
                width: "263px",
                margin: "auto",
                fontSize: "16px",
                
              }}
            >
                Automates various workflows and processes within your WhatsApp integration, such as order confirmations.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 colom">
            <img src={five} alt="first" />
            <p style={{  fontSize: "19px", fontWeight: "700",marginTop:'10px' }}>
            Multi-language Support
            </p>
            <p
              style={{
                height: "88px",
                width: "263px",
                margin: "auto",
                fontSize: "16px",
                
              }}
            >
              We Offer support for multiple languages within your WhatsApp integration service
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 colom">
            <img src={six} alt="first" />
            <p style={{  fontSize: "19px", fontWeight: "700",marginTop:'10px' }}>
            Template Messages
            </p>
            <p
              style={{
                height: "88px",
                width: "263px",
                margin: "auto",
                fontSize: "16px",
                
              }}
            >
              Utilize pre-approved template messages to send standardized notifications, reminders, updates, ensuring compliance
            </p>
          </div>
        </div>
        <div className="butndiv mt-4">
          <button className="btn btn-success butn">Start a free trial</button>
        </div>
      </div>
    </div>
  );
};
  
  export default Feature;
  