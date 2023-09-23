import React, { useState, useEffect } from 'react';
import Pagination from './../../components/Pagination.tsx';
import { paginate } from './../../utils/paginationUtils';
import { graphql, useStaticQuery } from "gatsby";



type Props = {}



interface Item {
  id: number;
  title: string;
  content:string;
  excerpt:string;
  slug:string;
  date:string;
  seo:{
    readingTime:number
  }
  categories:{
    nodes:{
      map:Map;
      name:string;
    }
  }
}

const itemsPerPage = 6;


 
const SectionGridBlog = (props: Props) => {
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);


  const dataPosts = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          slug
          excerpt
          title
          categories{
            nodes{
              name
            }
          }
          author {
            node {
              firstName
              username
            }
          }
          date(formatString: "D MMM, YYYY")
          seo {
            readingTime
          }
        }
      }
    }
  `);
  useEffect(() => {
    // Simulated API call to fetch items
    setItems(dataPosts.allWpPost.nodes);
      // console.log(dataPosts.allWpPost.nodes);
      
  }, []);
  // console.log(dataPosts.allWpPost);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const { data: currentItems, totalPages } = paginate(items, itemsPerPage, currentPage);


  return (
    <section className="section section--pageblog">
        <div className="content content--lastblog">   
           <div className="grid-blog">
            {currentItems.map((item, index) => (
                <article className="card card--blog"key={index}>
                  <div className="card-header">
                    <div className="info-blog">
                      <div className="tags-blog">
                        {item.categories.nodes.map((category, catIndex) => (
                          <div className="tag-blog" key={catIndex}>
                            <p>{category.name}</p>
                          </div>
                        ))}                        
                      </div>
                      <div className="fecha-blog">
                        {item.date}
                      </div>
                      <div className="time-read">{item.seo.readingTime}min de lectura</div>
                    </div>
                    <h2 className="">
                      {item.title}
                    </h2>                    
                  </div>
                  <div className="card-body">
                  <p   dangerouslySetInnerHTML={{ __html: item.excerpt }}/>
                   
                  </div>
                  <div className="card-footer">
                    <a href={`${item.slug}`} className="btn pill">
                      ver mas
                    </a>
                  </div>
                </article>              
              ))}
           </div>
          <Pagination  currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    </section> 
  )
}

export default SectionGridBlog