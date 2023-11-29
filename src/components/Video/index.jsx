import React from 'react';

const Video = () => {
  return (
    <section className="video bg-img parallaxie">
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      >
        <source src="/assets/img/geveshi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <a
        className="vid valign"
        onClick={(e) => {
          e.preventDefault();
          const video = document.querySelector('video');
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        }}
        href="#"
      >
        {/* <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div> */}
      </a>
    </section>
  );
};

export default Video;
