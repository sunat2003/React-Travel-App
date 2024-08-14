import './Footer.css';
import React from "react";
import video2 from "../../Assets/v1.mp4";
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineTwitch, AiOutlineTwitter } from 'react-icons/ai';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
export function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
   },[])
  return (
    <section className="footer-section">
      <div className="vedioDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>
      <div data-aos="fade-up" className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Trave with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              Send<FiSend className="icons" />
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="footerCard flex">
          <div className="footerInfo flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icons" /> Travel.
              </a>
            </div>

            <div className="footerParagraph">
            Traveling is an essential part of life that can help build experiences and broaden perspectives. It allows us to explore different cultures, meet new people, and gain a better understanding of the world around us. Traveling can also provide us with opportunities to learn more about ourselves and our place in the world.A travel/place essay takes travel or a place as its point of origin. The essay is probably not simply about a place or a journey, but rather is about what one may discover about people or life on that journey or in that place. People
             are often defined by the places they grow up in or choose to call home.
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className="icons" />
              <AiFillYoutube className="icons" />
              <AiFillInstagram className="icons" />
              <AiFillGithub className="icons" />
            </div>
          </div>

          <div className="footerLinks flex">
            {/* Group one */}
            <div data-aos="fade-up" className="linkGroups">
              <span className="groupTitle">
                OUR EGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Payments
              </li>
            </div>

            {/* Group two */}
            <div data-aos="fade-up" className="linkGroups">
              <span className="groupTitle">
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Hostel World
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Trip Adviser
              </li>
            </div>

            {/* Group three */}
            <div data-aos="fade-up" className="linkGroups">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                India
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Paries
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Japan
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Malesiya
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small >BEST TRAVEL WEBSITE THAME</small>
            <small >&copy;Copyright reserver-2024 Sunat Kumar Das</small>
          </div>
        </div>
      </div>
    </section>
  )
}