import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemDetailContainer";
// import { ProductsData } from "../json/Products";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { LoaderComponent } from "../components/LoaderComponent";
import '../components/styles/Responsive.css';
import '../components/CartDetailCard/CartDetailCard.module.css'
import TitleHome from "../components/TitleHome";


const homeStyles = {
  width: "100vw",
  minHeight: "100vh",
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [welcome, setWelcome] = useState(true);
  const [error, setError] = useState(false);
  const [typeError, setTypeError] = useState("");

  useEffect(() => {
    const db = getFirestore();

    const productCollection = collection(db, "products");
    getDocs(productCollection)
      .then((snapshot) => {
        setProductsData(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => setError(true))
      .then(() => setLoading(false));
  }, []);

  setTimeout(() => {
    setWelcome(false);
  }, 2000);

  return (
    <div className="style" style={homeStyles}>

      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Error </div>
      ) : welcome ? (
        <div>Bienvenido</div>
      ) : (
        <ItemListContainer productsData={productsData} />
      )}
    </div>
  );
};

export default Home;







