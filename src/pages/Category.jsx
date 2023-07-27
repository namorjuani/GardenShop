import React, { useEffect, useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

const Category = () => {
  const { categoryId } = useParams();
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productCollection = collection(db, "products");
      const q = query(productCollection, where("category", "==", categoryId));

      try {
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductsData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ItemDetailContainer productsData={productsData} />;
};

export default Category;

















// import React, { useEffect, useState } from "react";
// import ItemDetailContainer from "../components/ItemDetailContainer";
// import { useParams } from "react-router-dom";
// import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

// const Category = () => {
//   const { categoryId } = useParams();
//   const [productsData, setProductsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const db = getFirestore();
//       const productCollection = collection(db, "products");
//       const q = query(productCollection, where("category", "==", categoryId));

//       try {
//         const querySnapshot = await getDocs(q);
//         const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setProductsData(products);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [categoryId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return <ItemDetailContainer productsData={productsData} />;
// };

// export default Category;
