import React, { useState, useEffect } from 'react';


//Transversales
import Header from "./../components/sections/header";
import Footer from "./../components/sections/footer";


import Pagination from './../components/Pagination.tsx';
import { paginate } from './../utils/paginationUtils';
//Sections
import SectionBannerBlogCategories from "../components/sections/section-bannerBlogCategories";



interface Item {
    id: number;
    title: string;
    content:string;
  }
  
  const itemsPerPage = 5;



  

const Categoria: React.FC = ({ pageContext }) => {
    const [items, setItems] = useState<Item[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { data: currentItems, totalPages } = paginate(items, itemsPerPage, currentPage);
    
    useEffect(() => {
        setItems(pageContext.data.posts.nodes);
    }, []);

    // console.log(pageContext.data.posts.nodes);
    
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
      };
      
    const urlWeb : string | undefined = process.env.SITE_URL;
      console.log(pageContext.data.posts.nodes);
      
    
  return (
    <>
    <Header />
    <main className="main">
      <SectionBannerBlogCategories title={pageContext.data.name}/>
      <section className="section section--pageblog">
        <div className="content content--lastblog">   
           <div className="grid-blog">
            {currentItems.map((item, index) => (
                <article className="card card--blog"key={index}>
                  <div className="card-header">

                    <h2 className="">
                      {item.title}
                    </h2>                    
                  </div>
                  <div className="card-body">
                  <p   dangerouslySetInnerHTML={{ __html: item.excerpt }}/>
                   
                  </div>
                  <div className="card-footer">
                    <a href={`${urlWeb}/blog/${item.slug}`} className="btn pill">
                      ver mas
                    </a>
                  </div>
                </article>              
              ))}
           </div>
          <Pagination  currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    </section> 
    </main>
    <Footer/>
    </>
  );
};

export default Categoria;