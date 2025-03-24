import React from "react";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div className="mx-4 lg:mx-44 space-y-16 lg:space-y-24 py-12">
      <Hero />
      <Steps />
      <Testimonials />
      <Upload />
    </div>
  );
};

export default Home;