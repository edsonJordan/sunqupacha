

import React, { useState, useEffect } from 'react';


//Transversales
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";
//Sections
import SectionBannerSpecialists from "../components/sections/section-bannerSpecialists";
import SectionGridSpecialists from "../components/sections/section-gridSpecialists";
import SectionWhySunqupacha from "../components/sections/section-whySunqupacha";


const Especialistas: React.FC = () => {
  return (
    <>
    <Header />
    <main className="main">
      <SectionBannerSpecialists/>
      <SectionGridSpecialists/>
      <SectionWhySunqupacha/>
    </main>
    <Footer/>
    </>
  );
};

export default Especialistas;