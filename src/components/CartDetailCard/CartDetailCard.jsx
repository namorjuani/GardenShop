import React from "react";
import styles from "./CartDetailCard.module.css";


// ...importaciones...

const CartDetailCard = ({ product, qty }) => {
  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.itemWrapper}>
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.productInfo}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* <p>Precio: ${product.precio}</p> */}
          <p>Cantidad: {qty}</p> {/* Actualización aquí */}
        </div>
      </div>
    </div>
  );
};

export default CartDetailCard;
