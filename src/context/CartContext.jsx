import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const isInCart = (item) => {
    return cart.some((element) => element.id === item.id);
  };

  const addItem = (item) => {
    if (isInCart(item)) {
      // Si ya está, suma la cantidad
      const updatedCart = cart.map((element) =>
        element.id === item.id
          ? { ...element, quantity: element.quantity + item.quantity }
          : element
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
    alert("Producto agregado al carrito 🎉");
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
  };

  const updateQuantity = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      removeItem(id);
      return;
    }
    const updatedCart = cart.map((element) =>
      element.id === id ? { ...element, quantity: nuevaCantidad } : element
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((acc, element) => acc + element.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price * element.quantity, 0);
  };

  const checkout = () => {
    alert("Su compra ha sido realizada 🎉");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    getTotalItems,
    getCartTotal,
    clearCart,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
