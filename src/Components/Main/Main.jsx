import './Main.css';
import React from "react";
import img1 from "../../Assets/1.jpg";
import img2 from "../../Assets/2.jpg";
import img3 from "../../Assets/3.jpg";
import img4 from "../../Assets/4.jpg";
import img5 from "../../Assets/5.jpg";
import img6 from "../../Assets/6.jpg";
import img7 from "../../Assets/7.jpg";
import img8 from "../../Assets/8.jpg";
import img9 from "../../Assets/9.jpg";
import img10 from "../../Assets/10.jpg";
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Data = [
  {
    id: 1,
    image: img1,
    destTitle: "Marina Bay Sands",
    location: "Singapore",
    grade: "CULTURE RELAX",
    fees: "$600",
    description: "Traveling is an essential part of life that can help build experiences and broaden perspectives. It allows us to explore different cultures, meet new people, and gain a better understanding of the world around us. Traveling can also provide us with opportunities to learn more about ourselves and our place in the world."
  },
  {
    id: 2,
    image: img2,
    destTitle: "Dubai Mall",
    location: "Dubai",
    grade: "CULTURE RELAX",
    fees: "$300",
    description: "Traveling is an essential part of life that can help build experiences and broaden perspectives. It allows us to explore different cultures, meet new people, and gain a better understanding of the world around us. Traveling can also provide us with opportunities to learn more about ourselves and our place in the world."
  },
  {
    id: 3,
    image: img3,
    destTitle: "Colosseum",
    location: "Rome",
    grade: "CULTURE RELAX",
    fees: "$250",
    description: "Traveling is an essential part of life that can help build experiences and broaden perspectives. It allows us to explore different cultures, meet new people, and gain a better understanding of the world around us. Traveling can also provide us with opportunities to learn more about ourselves and our place in the world."
  },
  {
    id: 4,
    image: img5,
    destTitle: "HP Reef.",
    location: "Maldives",
    grade: "CULTURE RELAX",
    fees: "$530",
    description: "Traveling is an essential part of life that can help build experiences and broaden perspectives. It allows us to explore different cultures, meet new people, and gain a better understanding of the world around us. Traveling can also provide us with opportunities to learn more about ourselves and our place in the world."
  },
  {
    id: 5,
    image: img6,
    destTitle: "Sydney Opera Hous",
    location: "Sydney",
    grade: "CULTURE RELAX",
    fees: "$200",
    description: "Traveling is an essential part of life that can help build experiences and broaden perspectives. It allows us to explore different cultures, meet new people, and gain a better understanding of the world around us. Traveling can also provide us with opportunities to learn more about ourselves and our place in the world."
  },
  {
    id: 6,
    image: img7,
    destTitle: "New Yourk",
    location: "USA",
    grade: "CULTURE RELAX",
    fees: "$600",
    description: "Traveling is an essential part of life that can help build experiences and broaden perspectives. It allows us to explore different cultures, meet new people, and gain a better understanding of the world around us. Traveling can also provide us with opportunities to learn more about ourselves and our place in the world."
  },
  {
    id: 7,
    image: img8,
    destTitle: "Island Paradise",
    location: "Bora Bora",
    grade: "CULTURE RELAX",
    fees: "$330",
    description: "Traveling is an essential part of life that can help build experiences and broaden perspectives. It allows us to explore different cultures, meet new people, and gain a better understanding of the world around us. Traveling can also provide us with opportunities to learn more about ourselves and our place in the world."
  },
  {
    id: 8,
    image: img9,
    destTitle: "Maui Tropical Plantation",
    location: "Maui",
    grade: "CULTURE RELAX",
    fees: "$900",
    description: "Traveling is an essential part of life that can help build experiences and broaden perspectives. It allows us to explore different cultures, meet new people, and gain a better understanding of the world around us. Traveling can also provide us with opportunities to learn more about ourselves and our place in the world."
  },
  {
    id: 9,
    image: img10,
    destTitle: "Cusco",
    location: "Peru",
    grade: "CULTURE RELAX",
    fees: "$530",
    description: "Traveling is an essential part of life that can help build experiences and broaden perspectives. It allows us to explore different cultures, meet new people, and gain a better understanding of the world around us. Traveling can also provide us with opportunities to learn more about ourselves and our place in the world."
  }
]
export function Main() {
  useEffect(()=>{
    Aos.init({duration:3000})
   },[])
  return (
    <section className="mainSection container section">

      <div data-aos="fade-up" className="secTitle">
        <h3 className="title">
          Most Visited Destination
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(items =>
            <div data-aos="fade-up" className="singleDestination" key={items.id}>
              <div className="imageDiv">
                <img src={items.image} alt={items.destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{items.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icons" />
                  <span className="name">{items.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{items.grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{items.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{items.description}</p>
                </div>
                <button className="btn flex main-btn">
                  DETAILS <HiOutlineClipboardCheck className="icons" />
                </button>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}