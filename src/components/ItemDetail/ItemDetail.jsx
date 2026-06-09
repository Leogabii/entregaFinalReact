import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => setCantidad(cantidad + 1);

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const handleAgregar = () => {
    addItem({ ...item, quantity: cantidad });
  };

  return (
    <div className="item-detail-wrapper">
      <Item {...item}>
        <div className="item-detail__contador">
          <button className="btn bg-primary primary" onClick={decrementar}>-</button>
          <span>{cantidad}</span>
          <button className="btn bg-primary primary" onClick={incrementar}>+</button>
        </div>
        <button className="btn bg-primary primary" onClick={handleAgregar}>
          Agregar {cantidad} al carrito
        </button>
      </Item>
    </div>
  );
};
