import React from 'react'

import Carousel from 'react-multi-carousel';
import SmallArrow from "./../../images/pages/small-right.svg";


import { graphql, useStaticQuery } from "gatsby";


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
    items: 1,
     
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
     
  }
};

interface Post {
  title?: string;
  excerpt?: string;
  slug:string | null;
  uri: string | "#";
}


const SectionLastsBlogs = (props: Props) => {
  const lastPosts = useStaticQuery(graphql`
  {
  	allWpPost(limit:4){
    nodes{
      title
      excerpt
      slug
      uri
    }
	}
}
`);


  
  return (
    <section className="section section--lastblog ">
        <div className="content content--lastblog">
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
              {
                lastPosts.allWpPost.nodes.map((post:Post, index:number)=>{
                  console.log(post);
                  
                  return (
                    <article key={index+"lastblog"} className="blog-article ">
                      <div className="blog-article-testimonial">
                          <h3>{post.title}</h3>

                          <div   dangerouslySetInnerHTML={{ __html:post.excerpt}}/>
                        
                          <a className="btn solid" href={`/blog${post.uri}`}>
                            Leer Mas
                            <SmallArrow/>
                          </a>
                      </div>
                    </article>
                  )
                })
              }
            </Carousel>
          
        </div>
      </section>
  )
}


export default SectionLastsBlogs