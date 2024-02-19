import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
       <div className="banner">
          <img 
            src="../../../Images/olxfooter.png"
            alt=""
          />
        </div>
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul className='listitems'>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
       

        <div>
          <div className="heading">
            <p>TRENDING LOCATIONS</p>
          </div>
          <div className="list">
            <ul className='listitems'>
              <li>Kochi</li>
              <li>Calicut</li>
              <li>Kodungallur</li>
              <li>Aluva</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul className='listitems'>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul className='listitems'>
              <li>Blog</li>
              <li>Help</li> 
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
         
            </ul>
          </div>
        </div>
        <div>
        <div className="heading">
            <p>FOLLOW US</p>

          </div>
          <div className='d-flex'>
       <FaFacebookF></FaFacebookF> <FaInstagram></FaInstagram> <FaTwitter></FaTwitter> <SiYoutubemusic></SiYoutubemusic>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className='footerp'>Help - sitemap</p>
        <p className='footerp'>All rights reserved © 2006-2024 OLX</p>
      </div>
    </div>
  );
}

export default Footer;