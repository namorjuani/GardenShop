// import React from "react";
// import ProductCard from "../components/ProductCard";
// const ItemDetailContainer = ({ productsData }) => {
//   return (
//     <div>
//       {productsData.map((product) => {
//         return <ProductCard key={product.id} productData={product} />;
//       })}
//     </div>
//   );
// };

// export default ItemDetailContainer;
import React from "react";
import ProductCard from "../components/ProductCard";

const ItemDetailContainer = ({ productsData }) => {
  // Verificar si productsData es un array y tiene elementos
  if (!Array.isArray(productsData) || productsData.length === 0) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <div className="product-card-wrapper" style={{ /* ...tu estilo aquí... */ }}>
      {productsData.map((product) => {
        return <ProductCard key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;