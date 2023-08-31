import React from 'react'

import Carousel from 'react-multi-carousel';
import Arrowright from "./../../images/pages/arrow-right-active.svg";
import Arrowleft from "./../../images/pages/arrow-left-active.svg";
import { StaticImage } from 'gatsby-plugin-image';

type Props = {}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
     
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
     
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
     
  }
};



const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous, carouselState }) => {
  const {
    currentSlide,
    totalItems,
    slidesToShow
  } = carouselState;

  return (
    <div className="carousel-button-group">
      <button
        aria-label="go to previous slide"
        className={  currentSlide === 0 ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left" }
        onClick={() => previous()}
      >
        <Arrowleft/>
      </button>
      <button
        aria-label="go to next slide"
        className={ currentSlide === totalItems - slidesToShow ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right" }
        onClick={() => next()}
      >
        <Arrowright/>
      </button>
    </div>
  );
};

const CustomButtonGroup: React.FC<CarouselButtonGroupProps> = ({ next, previous, carouselState }) => {
  return <ButtonGroup
    
      next={next} 
      previous={previous} 
      carouselState={carouselState} 
   />;
};
const SectionTestimonial = (props: Props) => {
  return (
    <section className="section section--testimonial ">
        <div className="content content--testimonial">
          <h2 className="tittle" >
            Nuestros testimonios
          </h2>
          <div className="content--testimonials">
          <Carousel 
          responsive={responsive}
          showDots={false}
          arrows={false}
          additionalTransfrom={0}
          itemClass={"react-carousel-item"}
          minimumTouchDrag={80}
          partialVisible
          renderButtonGroupOutside
          customButtonGroup={<CustomButtonGroup />}
        >
            <article className="testimonial ">
              <StaticImage 
                className="testimonial__image"
                src="./../../images/pages/rectangulo.jpg"
                alt="Es un testimonio"
              />
              <div className="text-testimonial">
                  <p>
                  sunqupacha helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.
                  </p>
                  <h3>— Kimmo Hakonen - Skrum Master at DaGear AB</h3>
              </div>
            </article>
            <article className="testimonial ">
              <StaticImage 
                className="testimonial__image"
                src="./../../images/pages/rectangulo.jpg"
                alt="Es un testimonio"
              />
              <div className="text-testimonial">
                  <p>
                  sunqupacha helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.
                  </p>
                  <h3>— Kimmo Hakonen - Skrum Master at DaGear AB</h3>
              </div>
            </article>
            <article className="testimonial ">
              <StaticImage 
                className="testimonial__image"
                src="./../../images/pages/rectangulo.jpg"
                alt="Es un testimonio"
              />
              <div className="text-testimonial">
                  <p>
                  sunqupacha helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.
                  </p>
                  <h3>— Kimmo Hakonen - Skrum Master at DaGear AB</h3>
              </div>
            </article>
            <article className="testimonial ">
              <StaticImage 
                className="testimonial__image"
                src="./../../images/pages/rectangulo.jpg"
                alt="Es un testimonio"
              />
              <div className="text-testimonial">
                  <p>
                  sunqupacha helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.
                  </p>
                  <h3>— Kimmo Hakonen - Skrum Master at DaGear AB</h3>
              </div>
            </article>
          </Carousel>
          </div>
        </div>
      </section>
  )
}


export default SectionTestimonial