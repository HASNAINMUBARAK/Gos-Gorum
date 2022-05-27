import React from 'react';
import Card from "../Card";
import {data} from "../../Data";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 780, itemsToShow: 2 },
  { width: 960, itemsToShow: 3 },
];
const Collection = () => {
  return <>
   <h1 style={{padding: "40px 20px"}}>Men's Collection</h1>
  <div className='section-card'>
  <Carousel breakPoints={breakPoints} style={{width:"100%", wrapAround: "true" }}>
      {data.map((menuItem,i) => {
      return (
      <div key={i}>
        <Card menuItem= {menuItem} />
      </div>
      )})}
      </Carousel>
  </div>

  </>
};

export default Collection;