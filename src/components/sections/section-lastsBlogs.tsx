import React from 'react'

import Carousel from 'react-multi-carousel';
import SmallArrow from "./../../images/pages/small-right.svg";

type Props = {}

const responsiveBlog = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1.5,
    
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1.5,
     
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
     
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
     
  }
};



const SectionLastsBlogs = (props: Props) => {
  return (
    <section className="section section--blog ">
        <div className="content content--blog">
          <h2 className="tittle">
            Publicidad digital Artículos
          </h2>
            <Carousel
              className="blog blog-articles"
              itemClass="item-carousel"
              responsive={responsiveBlog}           
              showDots={false}
              arrows={false}
              infinite={true}
              autoPlay={true}

              autoPlaySpeed={4000}

              draggable={true}
            >
              <article className="blog-article ">
                <div className="blog-article-testimonial">
                    <h3>Kimmo Hakonen - Skrum Master at DaGear AB</h3>
                    <p>
                    sunqupacha helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.
                    </p>
                    <a className="btn solid" href="#">
                      Leer Mas
                      <SmallArrow/>
                    </a>
                </div>
              </article>
              <article className="blog-article ">
                <div className="blog-article-testimonial">
                    <h3>— Kimmo Hakonen - Skrum Master at DaGear AB</h3>
                    <p>
                    sunqupacha helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.
                    </p>
                    <a className="btn solid " href="#">
                      Leer Mas
                      <SmallArrow/>
                    </a>
                </div>
              </article>
            </Carousel>
          
        </div>
      </section>
  )
}


export default SectionLastsBlogs