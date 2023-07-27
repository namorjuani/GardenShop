import React from "react";
import ProductCard from "../components/ProductCard";

const ItemListContainer = ({ productsData }) => {
  return (
    <div className="product-card-wrapper">
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
