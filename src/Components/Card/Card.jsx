import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, image, title, price, description, category, rating }) => {
  return (
    <div className={styles.divContainer}>
      <p className={styles.id}>ID: {id}</p>
      <img className={styles.img} src={image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.category}>Category: {category}</p>
      <p className={styles.price}>Price: ${price.toFixed(2)}</p>
      <p className={styles.rating}>
        Rating: {rating.rate} ⭐ ({rating.count} reviews)
      </p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
