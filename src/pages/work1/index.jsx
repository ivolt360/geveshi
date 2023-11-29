/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Architecture is a visual art,",
          second: "and the buildings speak for themeselves.",
        }}
        // title = "text",
        content="Crafting architectural marvels where form meets function. Our projects stand as testament to innovative design, blending aesthetics and purpose seamlessly."
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
