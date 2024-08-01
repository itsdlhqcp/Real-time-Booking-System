import React from 'react'
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./confirm.css";
import { useNavigate } from 'react-router-dom';

const Confirm = () => {
   const navigate = useNavigate();

   const handleClick = () => {
    navigate('/');
   }

  return (
    <div>
      <Navbar />
      <hr/>
      
      <div className="homeContainer">
         <div className="confirm">
           <img src="https://media.istockphoto.com/id/1124964231/vector/check-mark-logo-vector-or-icon.jpg?s=612x612&w=0&k=20&c=qDcZHKlPnO8Ux_1ja77xfUmcAUsZquejrSfFaJpPPYo=" alt="no-img" />
            <h2>Room sucessfully booked!</h2>
            <button onClick={handleClick} className="rButton">
          Reserve Another Room Now!
        </button>
         </div>
        <h1 className="homeTitle">Homes guests favourites</h1>
        <FeaturedProperties/>
      </div>
    </div>
  );
};

export default Confirm;
