import React, { useState } from 'react'
import PageHeaderContent from '../../components/pageHeaderContent/Index'
import { BsInfoCircleFill } from "react-icons/bs";
import Image1 from '../../images/Image1.webp'
import Image2 from '../../images/Image2.png'
import Image3 from '../../images/Image3.jpg'
import Image4 from '../../images/Image4.jpg'
import Image5 from '../../images/Image5.png'
import Image6 from '../../images/Image6.png'
import Image7 from '../../images/Image7.webp'
import Image8 from '../../images/Image8.jpg'
import Image9 from '../../images/Image9.png'

import './style.scss'
// import { useState } from 'react';


const portfolioData =[
  {
    id:2,
    name:"Ecommerce",
     link:"",
    image:Image1
   
  },
  {
    id:3,
    name:"Notes App",
      link:"",
    image:Image2,
  },
  {
    id:3,
    name:"Supplier Design",
      link:"",
    image:Image3
  },
  {
    id:3,
    name:"Shopping cart design",
    image:Image4,
      link:"",
  },
  {
    id:2,
    name:"Todo App",
    image:Image5,
      link:"",
  },
  {
    id:2,
    name:"Development",
    image:Image6,
      link:"",
  },
  {
    id:2,
    name:"Web dev",
    image:Image7,
      link:"",
  },
  {
    id:3,
    name:"Web design",
    image:Image8,
      link:"",
  },
  {
    id:3,
    name:"Design",
    image:Image9,
      link:"",
  },
]
const filterData =[
  {
    filterId:1,
    label:'All'
  },
  {
    filterId:2,
    label:'Development'
  },
  {
    filterId:3,
    label:'Design'
  },
]

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio
