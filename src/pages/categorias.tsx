import React from 'react';

//Transversales
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";

//Sections
import SectionBannerBlogCategories from "../components/sections/section-bannerBlogCategories";
import SectionGridBlogCategories from "../components/sections/section-gridBlogCategories";


const Blog: React.FC = () => {

  return (
    <>
    <Header />
    <main className="main">
      <SectionBannerBlogCategories/>
      <SectionGridBlogCategories/>   
    </main>
    <Footer/>
    </>
  );
};

export default Blog;