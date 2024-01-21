import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styles from '../assets/styles/Custom.module.css'

//My Rating Component


const Rating = ({ value, text }) => {
  return <div className={styles.rating}>
    <span>
        {value >= 1 ? <FaStar/> : value >= 0.5 ? <FaStarHalfAlt/>: <FaRegStar/>}
    </span>
    <span>
        {value >= 2 ? <FaStar/> : value >= 1.5 ? <FaStarHalfAlt/>: <FaRegStar/>}
    </span>
    <span>
        {value >= 3 ? <FaStar/> : value >= 2.5 ? <FaStarHalfAlt/>: <FaRegStar/>}
    </span>
    <span>
        {value >= 4 ? <FaStar/> : value >= 3.5 ? <FaStarHalfAlt/>: <FaRegStar/>}
    </span>
    <span>
        {value >= 5 ? <FaStar/> : value >= 4.5 ? <FaStarHalfAlt/>: <FaRegStar/>}
    </span>
    <span className={styles.ratingText}>{text ? text : null}</span>
  </div>;
};

export default Rating;
