import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartDetailCard from "../components/CartDetailCard/CartDetailCard";
import LoaderComponent from "../components/LoaderComponent";
import WhatsAppButton from "../components/WhatsAppButton";
import { collection, getDoc, doc, getFirestore } from "firebase/firestore"; // Importa los módulos de Firebase necesarios para la función fetchProductsByIds

const fetchProductsByIds = async (ids) => {
    const db = getFirestore();
    const productRefs = ids.map((id) => doc(collection(db, "products"), id));

    const productSnapshots = await Promise.all(
        productRefs.map((productRef) => getDoc(productRef))
    );

    const products = productSnapshots.map((productSnapshot) => {
        if (productSnapshot.exists()) {
            return { id: productSnapshot.id, ...productSnapshot.data() };
        } else {
            return null;
        }
    });

    return products.filter((product) => product !== null);
};

const styles = {
    cartWrapper: {
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
    },
    productCardDetail: {
        width: "60%",
    },
};

const Cart = () => {
    const [loading, setLoading] = useState(true);
    const { cartItems } = useContext(CartContext);

    useEffect(() => {
        if (cartItems?.products?.length > 0) {
            const ids = cartItems.products.map((item) => item.product.id);
            fetchProductsByIds(ids)
                .then((res) => {
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [cartItems]);

    return loading ? (
        <LoaderComponent />
    ) : (
        <div style={styles.cartWrapper}>
            <div style={styles.productCardDetail}>
                <h1>Tu carrito</h1>

                {cartItems?.products?.map((cartProduct) => {
                    const qty = cartProduct ? cartProduct.qty : 0;
                    return (
                        <CartDetailCard
                            key={cartProduct.product.id}
                            product={cartProduct.product}
                            qty={qty}
                        />
                    );
                })}
            </div>
            <WhatsAppButton productsData={cartItems?.products} />
        </div>
    );
};

export default Cart;













// import React, { useContext, useEffect, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import CartDetailCard from "../components/CartDetailCard/CartDetailCard";
// import LoaderComponent from "../components/LoaderComponent";
// import WhatsAppButton from "../components/WhatsAppButton";
// import { collection, getDoc, doc, getFirestore } from "firebase/firestore"; // Importa los módulos de Firebase necesarios para la función fetchProductsByIds

// const fetchProductsByIds = async (ids) => {
//     const db = getFirestore();
//     const productRefs = ids.map((id) => doc(collection(db, "products"), id));

//     const productSnapshots = await Promise.all(
//         productRefs.map((productRef) => getDoc(productRef))
//     );

//     const products = productSnapshots.map((productSnapshot) => {
//         if (productSnapshot.exists()) {
//             return { id: productSnapshot.id, ...productSnapshot.data() };
//         } else {
//             return null;
//         }
//     });

//     return products.filter((product) => product !== null);
// };

// const styles = {
//     cartWrapper: {
//         display: "flex",
//         flexDirection: "row",
//         width: "100vw",
//         height: "100vh",
//     },
//     productCardDetail: {
//         width: "60%",
//     },
// };

// const Cart = () => {
//     const [error, setError] = useState(false);
//     const [productsData, setProductsData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const { cartItems } = useContext(CartContext) || { cartItems: { products: [] } };

//     useEffect(() => {
//         if (cartItems && cartItems.products.length > 0) { // Modifica esta línea para verificar cartItems.products en lugar de cartItems.length
//             const ids = cartItems.products.map((item) => item.product.id); // Asegúrate de acceder a cartItems.products
//             fetchProductsByIds(ids)
//                 .then((res) => {
//                     setProductsData(res);
//                 })
//                 .catch((err) => setError(err))
//                 .then(() => setLoading(false));
//         } else {
//             setLoading(false); // Si no hay productos en el carrito, establece loading en false para evitar que la carga se quede atascada.
//         }
//     }, [cartItems]);

//     return loading ? (
//         <LoaderComponent />
//     ) : (
//         <div style={styles.cartWrapper}>
//             <div style={styles.productCardDetail}>
//                 <h1>Tu carrito</h1>

//                 {productsData.map((product) => {
//                     const cartProduct = cartItems.products.find(
//                         (item) => item.product.id === product.id
//                     );
//                     const qty = cartProduct ? cartProduct.qty : 0;
//                     return (
//                         <CartDetailCard
//                             key={product.id}
//                             product={product}
//                             qty={qty}
//                         />
//                     );
//                 })}
//             </div>
//             <WhatsAppButton productsData={productsData} />
//         </div>
//     );
// };

// export default Cart;
