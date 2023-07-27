import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './routes/MainRouter';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer'; // Importa el componente Footer que creaste
import '../src/components/styles/StylesBody.css';
import '../src/components/styles/Responsive.css';
import '../src/components/styles/ProductCard.css';
import Cart from './pages/Cart';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de recursos (puedes reemplazar esto con tus propias lógicas de carga)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Tiempo de carga simulado de 3 segundos
  }, []);

  return (
    <div className="App">
      <CartProvider>
        <MainRouter />
      </CartProvider>
      {!isLoading && <Footer />} {/* Renderiza el footer solo cuando isLoading sea false */}
    </div>
  );
};

export default App;
