import React from "react";
import CartButtons from "./CartButtons";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/ProductCard.css";

const ProductCard = ({ productData }) => {
  const customStyleNoStock = {
    backgroundColor: "primary",
    buttonState: "disabled",
  };
  const customStyleStock = {
    backgroundColor: "primary",
    buttonState: "",
  };
  return (
    <Card style={{ width: "18rem", margin: "10px 0" }}>
      <Card.Img variant="top" src={productData.image} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        {/* {productData.stock < 100 ? <div>Sin stock</div> : <CartButtons />} */}
        <div>{productData.stock < 10 ? "Ultimos Productos" : ""} </div>
        {productData.stock < 10 ? (
          <CartButtons customStyle={customStyleNoStock} productId={productData.id} />
        ) : (
          <CartButtons customStyle={customStyleStock} productId={productData.id} />
        )}

        <div
          className="product-card-wrapper"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Link
            to={`/item/${productData.id}`}
            style={{
              marginTop: "10px",
              backgroundColor: "#007bff",
              textDecoration: "none",
              color: "white",
              borderRadius: "5px",
              fontSize: "18px",
              padding: "10px",
            }}
          >
            Ir a detalle
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
