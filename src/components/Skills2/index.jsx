import React from 'react'
import skillsProgress from '../../common/skillsProgress';
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress()
  }, [])
    return (
      <div className="skills-sec section-padding pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="skills-box full-width">
                <div className="skill-item">
                  <h6>Architecture</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>Interior Design</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="75%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>3D Modeling</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h4 className="playfont line-height-50 mb-20">
                  Providing Customized Design Solutions That Fits Every Space .
                </h4>
                <p className="mb-10">
                Transform ideas with our 3D modeling, architecture, and interior design. We bring visions to life through captivating renderings and meticulous attention.
                </p>
                <p>
                Tailored solutions await. From 3D modeling to interior design, we bring concepts to life with striking renderings and unmatched expertise, ensuring every detail reflects your unique style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills2