// import React, { createContext, useState } from "react";


// export const CartContext = createContext();


// export const CartProvider = ({ children }) => {
//     const [count, setCount] = useState({ qtyItems: 0, products: [] });


//     return (
//         <CartContext.Provider
//             value={{
//                 count,
//                 setCount,
//             }}
//         >
//             {children}
//         </CartContext.Provider>
//     );
// };

// export default CartProvider;
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //   const [cartItems, setCartItems] = useState({ products: [], qtyItems: 0 });
    const [cartItems, setCartItems] = useState({ products: [], qtyItems: 0 });

    const addItemToCart = (product, quantity) => {
        // Verificar si el producto ya está en el carrito
        const existingItem = cartItems.products.find((item) => item.product.id === product.id);

        if (existingItem) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            setCartItems((prevCartItems) =>
                prevCartItems.products.map((item) =>
                    item.product.id === product.id ? { ...item, qty: quantity } : item
                )
            );
        } else {
            // Si el producto no está en el carrito, agregarlo
            setCartItems((prevCartItems) => ({
                ...prevCartItems,
                products: [...prevCartItems.products, { product, qty: quantity }],
            }));
        }
    };

    const removeItemFromCart = (productId) => {
        // Remover el producto del carrito por su ID
        setCartItems((prevCartItems) => ({
            ...prevCartItems,
            products: prevCartItems.products.filter((item) => item.product.id !== productId),
        }));
    };
    const count = cartItems.products.reduce((total, item) => total + item.qty, 0);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, count }}>
            {children}
        </CartContext.Provider>
    );
};