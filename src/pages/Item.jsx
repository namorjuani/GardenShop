import React, { useEffect, useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Item = () => {
  const [productsData, setProductsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { itemId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productCollection = doc(db, "products", itemId);

      try {
        const snapshot = await getDoc(productCollection);
        if (snapshot.exists()) {
          setProductsData({ id: snapshot.id, ...snapshot.data() });
        } else {
          setError(true); // Si el producto no existe, muestra un error
        }
      } catch (error) {
        setError(true); // Si ocurre un error al obtener los datos, muestra un error
      } finally {
        setLoading(false); // Finalmente, deja de mostrar el loader
      }
    };

    fetchData();
  }, [itemId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: El producto no existe o ha ocurrido un error.</div>;
  }

  return <ItemDetailContainer productsData={productsData} />;
};

export default Item;
