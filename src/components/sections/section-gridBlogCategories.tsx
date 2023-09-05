import React, { useState, useEffect } from 'react';
import Pagination from './../../components/Pagination.tsx';
import { paginate } from './../../utils/paginationUtils';
import { graphql, useStaticQuery } from "gatsby";



type Props = {}



interface Item {
  id: number;
  title: string;
  content:string;
}

const itemsPerPage = 5;


 
const SectionGridBlogCategories = (props: Props) => {
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);


  const dataPosts = useStaticQuery(graphql`
  {
    allWpCategory{
       nodes{
         name
         slug
         uri
         description
         
       }
     }
   }
  `);
  useEffect(() => {
    // Simulated API call to fetch items
    setItems(dataPosts.allWpCategory.nodes);

  }, []);
  // console.log(dataPosts.allWpCategory);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const { data: currentItems, totalPages } = paginate(items, itemsPerPage, currentPage);
 
  const urlWeb : string | undefined = process.env.SITE_URL;

  
  return (
    <section className="section section--pageblog">
        <div className="content content--lastblog">   
           <div className="grid-blog">
            {currentItems.map((item, index) => (
                <article className="card card--blog"key={index}>
                  <div className="card-header">

                    <h2 className="">
                      {item.name}
                    </h2>                    
                  </div>
                  <div className="card-body">
                  {/* <p   dangerouslySetInnerHTML={{ __html: item.excerpt }}/> */}
                   
                  </div>
                  <div className="card-footer">
                    <a href={`${urlWeb}/categoria/${item.slug}`} className="btn pill">
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

export default SectionGridBlogCategories