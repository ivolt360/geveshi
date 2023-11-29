import React from "react";
import Link from "next/link";


const ProjectIntro = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>introduction</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p>
              The “Finiwaage Holiday Retreat” stands as a shining example of our architectural prowess, nestled amidst breathtaking landscapes and surrounded by nature’s abundant beauty. Our collaboration with the client on this project was nothing short of extraordinary, and the result is a mesmerizing sanctuary that offers an unrivaled holiday experience.
              </p>
            </div>
          </div>

          {/* <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <Link href="#">Envato.com</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>6 August 2022</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                <Link href="#">Web Design </Link>,
                <Link href="#">WordPress</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="#">Minimal</Link> , <Link href="#">Modern</Link> ,
                <Link href="#">Design</Link>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
