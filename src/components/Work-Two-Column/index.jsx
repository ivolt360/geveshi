/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const WorkTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  // Define the list of images
  const images = [
    { path: "/assets/img/works/2 column/2.jpg", title: "Finiwaage Holiday Retreat", category: "finiwage" },
    { path: "/assets/img/works/2 column/1.jpg", title: "Finiwaage Holiday Retreat", category: "finiwage" },
    { path: "/assets/img/works/2 column/4.jpg", title: "Finiwaage Holiday Retreat", category: "finiwage" },
    { path: "/assets/img/works/2 column/6.jpg", title: "Finiwaage Holiday Retreat", category: "finiwage" },
    { path: "/assets/img/works/2 column/7.jpg", title: "Finiwaage Holiday Retreat", category: "finiwage" },
    { path: "/assets/img/works/2 column/8.jpg", title: "Finiwaage Holiday Retreat", category: "finiwage" },
    { path: "/assets/img/works/2 column/9.jpg", title: "Finiwaage Holiday Retreat", category: "finiwage" },
    { path: "/assets/img/works/2 column/10.jpg", title: "Finiwaage Holiday Retreat", category: "finiwage" },
    { path: "/assets/img/works/2 column/11.jpg", title: "Finiwaage Holiday Retreat", category: "finiwage" },

    { path: "/assets/img/works/2 column/12.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/13.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/14.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/15.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/16.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/17.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/18.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/19.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/20.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/21.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/22.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/23.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/24.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/25.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/26.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/27.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/28.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/29.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/30.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/31.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/32.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/33.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/34.png", title: "Residential Sketchup 3D", category: "residential" },
    { path: "/assets/img/works/2 column/35.png", title: "Residential Sketchup 3D", category: "residential" },

    { path: "/assets/img/works/2 column/36.jpg", title: "Concept Development", category: "concept" },
    { path: "/assets/img/works/2 column/37.jpg", title: "Concept Development", category: "concept" },
    { path: "/assets/img/works/2 column/38.jpg", title: "Concept Development", category: "concept" },
    { path: "/assets/img/works/2 column/5.jpg", title: "Concept Development", category: "concept" },
    { path: "/assets/img/works/2 column/40.jpg", title: "Concept Development", category: "concept" },
    { path: "/assets/img/works/2 column/41.jpg", title: "Concept Development", category: "concept" },
    { path: "/assets/img/works/2 column/42.jpg", title: "Concept Development", category: "concept" },

  ];

  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 finiwage concept residential">
              <div className="section-head mb-0">
                <h3>Works</h3>
                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      All
                    </span>
                    <span data-filter=".finiwage">Finiwaage Holiday Retreat</span>
                    <span data-filter=".concept">Concept Development</span>
                    <span data-filter=".residential">Residential Sketchup 3D</span>
                  </div>
                </div>
              </div>
            </div>

            {images.slice(0, 100).map((image, index) => (
              <div key={index} className={`col-lg-6 items ${image.category}`}>
                <div className="item">
                  <div className="img">
                    <img src={image.path} alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      <Link href="/project-details">{image.title}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};
