/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials2 = () => {
  return (
    <section className="testimonials2 bg-blc">
      <div className="container-fluid no-padding">
        <div className="row">
          <div className="col-lg-8 no-padding order2">
            <div className="box">
              <Slider
                className="testimslic-item wow fadeInUp"
                data-wow-delay=".3S"
                {...{
                  dots: true,
                  arrows: false,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 2,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info">
                    <div className="author">
                      <div className="img-author">
                        <div className="img">
                          <img src="/assets/img/clients/1.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <h6 className="author-name">Hamd Arshad</h6>
                        <span className="author-details">
                          Co-founder, IVOLT
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  Geveshi: Innovative architects crafting enduring beauty, seamlessly transforming visions into living art. Excellence defines our legacy.
                  </p>
                  <div className="qoute-img">
                    <img src="/assets/img/icons/quote-light.svg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="info">
                    <div className="author">
                      <div className="img-author">
                        <div className="img">
                          <img src="/assets/img/clients/11.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <h6 className="author-name">Ismail Shammon</h6>
                        <span className="author-details">
                          Co-founder, Panopixell
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  Geveshi architects redefine spaces, seamlessly blending innovation and artistry to create enduring, visually captivating environments.
                  </p>
                  <div className="qoute-img">
                    <img src="/assets/img/icons/quote-light.svg" alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className="info">
                    <div className="author">
                      <div className="img-author">
                        <div className="img">
                          <img src="/assets/img/clients/111.png" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <h6 className="author-name">Abdul Karim</h6>
                        <span className="author-details">
                          Co-founder, Riyada
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  Geveshi excels in architectural mastery, crafting spaces where innovation meets aesthetics, creating enduring beauty and functionality seamlessly.
                  </p>
                  <div className="qoute-img">
                    <img src="/assets/img/icons/quote-light.svg" alt="" />
                  </div>
                </div>
              </Slider>
              <div className="qoute-icon">
                <img src="/assets/img/icons/left-quote.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 order1">
            <div className="sec-head mt-80 mb-0">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Testimonials
              </h6>
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  What <br /> People <br /> Say
                </h3>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
