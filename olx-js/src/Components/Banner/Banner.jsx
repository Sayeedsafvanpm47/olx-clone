

import './Banner.css';

import { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Banner() {
  const [arrow,setArrow] = useState(false)
  const changeArrow = ()=>{
    setArrow(!arrow)
  }
  return (
    <div className="bannerParentDiv">
    
      <div className="bannerChildDiv">
  
        <div className="menuBar">
      
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            
        {!arrow && <span onClick={changeArrow} className=' fs-4 '><IoIosArrowDown /></span> }  
        {arrow && <span onClick={changeArrow} className=' fs-4'><IoIosArrowUp />
</span>}
          </div>
          <div className="otherQuickOptions mt-2">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale:Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehichles</span>
            <span>For Rent: House & Apartments</span>
          </div>
      
        </div>
     
        <div className="banner">
          <img 
            src="../../../Images/banner2.jpg"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;