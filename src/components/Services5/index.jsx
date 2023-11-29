import React from "react";
import Link from "next/link";

const Services5 = () => {
  return (
    <section className="services-col section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>Best Features.</h3>
          <div className="tex-bg">Services</div>
        </div>
        <div className="row bord-box wow fadeInUp">
          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-home"></span>
            <h6 className="mb-20">Architecture</h6>
            <p>
            Specializing in transformative architectural solutions and design excellence.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-kitchen-2"></span>
            <h6 className="mb-20">Interior Design</h6>
            <p>
            Interior design excellence, harmonizing aesthetics and functionality seamlessly.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-plan"></span>
            <h6 className="mb-20">3D Modeling</h6>
            <p>
            Skillfully bringing visions to life with creativity for visually captivating experiences.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-interior-design"></span>
            <h6 className="mb-20">Rendering</h6>
            <p>
            Revolutionizing concepts into stunning reality with rendering expertise and precision.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services5;
