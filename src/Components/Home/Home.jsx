import './Home.css';
import React, { useEffect } from "react";
import video1 from '../../Assets/v2.mp4';
import { FaLocationDot } from 'react-icons/fa6';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook, FiGithub } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function Home() {
  useEffect(()=>{
     Aos.init({duration:2000})
  },[])
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video1} type="video/mp4" muted autoPlay loop className="video1"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Out Pakages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search our Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter your name here' />
              <FaLocationDot className="icons" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your Date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="lable-total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOption flex">
            <HiFilter className="icons" />
            <span>More Filters</span>
          </div>
        </div>
        
        <div data-aos="fade-up" className="homeFooter flex">
            <div className="rightIcons">
               <FiFacebook className="icons" />
               <AiOutlineInstagram className="icons" />
               <FiGithub className="icons" />
            </div>
            <div className="leftIcons">
              <BsListTask className="icons"/>
              <TbApps className="icons" />
            </div>
          </div>
      </div>
    </section>
  )
}