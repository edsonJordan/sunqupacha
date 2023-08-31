import React from 'react';

//Transversales
import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";

//Sections
import SectionBannerBlog from "../components/sections/section-bannerBlog";
import SectionGridBlog from "../components/sections/section-gridBlog";


const Blog: React.FC = () => {

  return (
    <>
    <Header />
    <main className="main">
      <SectionBannerBlog/>
      <SectionGridBlog/>   
    </main>
    <Footer/>
    </>
  );
};

export default Blog;