import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const CartButtons = ({ customStyle, productId }) => {
    const { cartItems, setCartItems } = useContext(CartContext); // Obtener cartItems y setCartItems del contexto

    const handleMoreClick = () => {
        // Tu lógica para incrementar la cantidad
        const quantity = cartItems.products.find((item) => item.product.id === productId)?.qty || 0;
        const newQuantity = quantity + 1;
        setCartItems((prevCartItems) => {
            const updatedCartItems = prevCartItems.products.map((item) =>
                item.product.id === productId ? { ...item, qty: newQuantity } : item
            );
            return { ...prevCartItems, products: updatedCartItems };
        });
    };

    const handleLessClick = () => {
        // Tu lógica para decrementar la cantidad
        const quantity = cartItems.products.find((item) => item.product.id === productId)?.qty || 0;
        const newQuantity = quantity - 1;
        if (newQuantity >= 0) {
            setCartItems((prevCartItems) => {
                const updatedCartItems = prevCartItems.products.map((item) =>
                    item.product.id === productId ? { ...item, qty: newQuantity } : item
                );
                return { ...prevCartItems, products: updatedCartItems };
            });
        }
    };

    const addToCart = (productId, quantity) => {
        // Tu lógica para agregar al carrito
        const existingItemIndex = cartItems.products.findIndex((item) => item.product.id === productId);

        if (existingItemIndex !== -1) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            setCartItems((prevCartItems) => {
                const updatedCartItems = [...prevCartItems.products];
                updatedCartItems[existingItemIndex].qty += quantity;
                return { ...prevCartItems, products: updatedCartItems };
            });
        } else {
            // Si el producto no está en el carrito, agregarlo
            setCartItems((prevCartItems) => ({
                ...prevCartItems,
                products: [...prevCartItems.products, { product: { id: productId }, qty: quantity }],
            }));
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div style={{ margin: "10px" }}>
                <Button variant="outline-secondary" className="rounded-0" onClick={handleLessClick}>
                    -
                </Button>
                <span style={{ margin: "10px", fontSize: "18px" }}>
                    {cartItems.products.find((item) => item.product.id === productId)?.qty || 0}
                </span>
                <Button variant="outline-secondary" className="rounded-0" onClick={handleMoreClick}>
                    +
                </Button>
            </div>
            <Button
                className="ml-2"
                variant={customStyle.backgroundColor}
                onClick={() => addToCart(productId, 1)} // Llamar a addToCart con el productId y la cantidad (1 en este caso)
            >
                Agregar al Carrito
            </Button>
        </div>
    );
};

export default CartButtons;
