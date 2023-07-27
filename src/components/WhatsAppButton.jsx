import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { CartContext } from "../context/CartContext";
import "../App.css";

const WhatsAppButton = () => {
  const { count } = useContext(CartContext);

  const handleWhatsAppClick = () => {
    // Filtrar los elementos de count.products que tengan una propiedad product válida
    const validCartItems = count.products.filter(
      (item) => item.product && item.product.title && item.qty && item.qty.qty
    );

    // Generar el mensaje con los detalles del carrito
    const cartDetails = validCartItems
      .map((item) => `${item.product.title}: ${item.qty.qty}`)
      .join("\n");

    // Agregar un mensaje introductorio
    const message = `¡Hola! Me gustaría realizar una compra con los siguientes productos:\n${cartDetails}`;

    // Número de WhatsApp al que se enviará el mensaje
    const phoneNumber = "2984525796";

    // Generar el enlace de WhatsApp con el mensaje
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Abrir WhatsApp en una nueva ventana o pestaña para enviar el mensaje
    window.open(whatsappLink, "_blank");
  };

  return (
    <a
      href="#"
      className="whatsapp-button"
      onClick={handleWhatsAppClick}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      Comprar por WhatsApp
    </a>
  );
};

export default WhatsAppButton;
