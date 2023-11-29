import React from "react";

const ContactInfo = () => {
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="custom-font">Call Us</h6>
                <p>+9607933331</p>
                {/* <p>+1 (000) 9876 54321</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font">Email Us</h6>
                <p>md@geveshi.com</p>
                {/* <p>Username@website.com</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font">Address</h6>
                <p>
                Geveshi Architects Studio Lonuziyaarai Magu, Henveiru, Male' City, 20074 Republic of Maldives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
