import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';

type Props = {}




 
const SectionGridSpecialists = (props: Props) => {
  const [items, setItems] = useState<Item[]>([]);

  const factoryData= [
    {
      "id": 1,
      "title": "Artículo 1",
      "content": "Contenido del artículo 1."
    },
    {
      "id": 2,
      "title": "Artículo 2",
      "content": "Contenido del artículo 2."
    },
    {
      "id": 3,
      "title": "Artículo 3",
      "content": "Contenido del artículo 3."
    },
    {
      "id": 4,
      "title": "Artículo 4",
      "content": "Contenido del artículo 4."
    },
    {
      "id": 5,
      "title": "Artículo 5",
      "content": "Contenido del artículo 5."
    },
    {
      "id": 6,
      "title": "Artículo 6",
      "content": "Contenido del artículo 6."
    },
    {
      "id": 7,
      "title": "Artículo 7",
      "content": "Contenido del artículo 7."
    },
    {
      "id": 8,
      "title": "Artículo 8",
      "content": "Contenido del artículo 8."
    },
    {
      "id": 9,
      "title": "Artículo 9",
      "content": "Contenido del artículo 9."
    },
    {
      "id": 10,
      "title": "Artículo 10",
      "content": "Contenido del artículo 10."
    },
    {
      "id": 11,
      "title": "Artículo 11",
      "content": "Contenido del artículo 11."
    },
    {
      "id": 12,
      "title": "Artículo 12",
      "content": "Contenido del artículo 12."
    },
    {
      "id": 13,
      "title": "Artículo 13",
      "content": "Contenido del artículo 13."
    },
    {
      "id": 14,
      "title": "Artículo 14",
      "content": "Contenido del artículo 14."
    },
    {
      "id": 15,
      "title": "Artículo 15",
      "content": "Contenido del artículo 15."
    },
    {
      "id": 16,
      "title": "Artículo 16",
      "content": "Contenido del artículo 16."
    },
    {
      "id": 17,
      "title": "Artículo 17",
      "content": "Contenido del artículo 17."
    },
    {
      "id": 18,
      "title": "Artículo 18",
      "content": "Contenido del artículo 18."
    },
    {
      "id": 19,
      "title": "Artículo 19",
      "content": "Contenido del artículo 19."
    },
    {
      "id": 20,
      "title": "Artículo 20",
      "content": "Contenido del artículo 20."
    }
  ];

  useEffect(() => {
    // Simulated API call to fetch items
    setItems(factoryData);

  }, []);

  return (
  <section className="section section--pageblog">
      <div className="content content--blog">   
        <div className="grid-blog">
          {items.map((item) => (
              <article className="card card--specialitst" key={item.id}>
                <div className="card-header">
                  <StaticImage
                    src="../../images/pages/user.jpg"
                    alt="Usuario"
                    />
                  <h2>
                    {item.title}
                  </h2>                    
                </div>
                <div className="card-body">
                  <p >
                    {item.content}
                  </p>
                  <p  className="text-primaryactive">
                    correo@gmail.com
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn pill">
                    ver mas
                  </a>
                </div>
              </article>              
            ))}
        </div>
        
      </div>
  </section>
  )
}

export default SectionGridSpecialists