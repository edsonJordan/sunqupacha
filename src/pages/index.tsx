import React from "react"
import type { HeadFC, PageProps } from "gatsby"


//Transversales
import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";

//Sections
import SectionBannerIndex from "../components/sections/section-bannerIndex";
import SectionBookEmail from "../components/sections/section-bookEmail";
import SectionTestimonial from "../components/sections/section-testimonial"
import SectionLastsBlogs from "../components/sections/section-lastsBlogs"
import SectionWorks from "../components/sections/section-works";
import SectionWhySunqupacha from "../components/sections/section-whySunqupacha"

// Utils
import LazyLoadOnScroll from '../utils/LazyLoadOnScroll';


const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <Header />
    <main className="main" >
      <SectionBannerIndex/>
      <LazyLoadOnScroll component={SectionWorks}/>
      <LazyLoadOnScroll component={SectionBookEmail}/>
      <LazyLoadOnScroll component={SectionTestimonial}/>
      <LazyLoadOnScroll component={SectionLastsBlogs}/>
      <LazyLoadOnScroll component={SectionWhySunqupacha}/>
    </main>
    <Footer/>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => 
<>
<title>Home Page</title>
  <html lang="es" />
  <meta http-equiv="cache-control" content="public, max-age=604800, immutable" />
</>