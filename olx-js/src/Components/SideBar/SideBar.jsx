import React from 'react'
import Arrow from '../assets/Arrow'
import '../SideBar/SideBar.css'

const SideBar = () => {
  return (
    <div className='sidebarDiv'>
 <p className='pHead'>Login in india</p>
 <div className='pSubHead'>CATEGORIES <Arrow></Arrow></div> 
 <span className='spanSub'>All categories</span>
 <hr />
 <div className='pSubHead'>LOCATIONS <Arrow></Arrow></div>
 <span className='spanSub'>India</span>

 <hr />
<span className='filter'>FILTERS</span>
<div>BUDGET <Arrow></Arrow></div> 
<span className='filter2'>Choose a range below</span>
<div className="d-flex">
<input className='boxWidth' type="number"  placeholder='min'/> 
<p className='box'>to</p>
<input className='boxWidth' type="number" placeholder='max' /> 
<button className='applybutton'>Apply</button>
</div>


 
    </div>
  )
}

export default SideBar