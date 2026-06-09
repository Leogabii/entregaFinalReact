import { useCart } from "../../context/CartContext";

export const CartItem = ({ item }) => {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="80" height="80" />
      <div className="cart-item__info">
        <h4>{item.name}</h4>
        <p>${item.price.toLocaleString("es-AR")} c/u</p>
        <div className="cart-item__contador">
          <button
            className="btn bg-primary primary"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="btn bg-primary primary"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <p>Subtotal: ${(item.price * item.quantity).toLocaleString("es-AR")}</p>
        <button
          className="btn bg-delete primary"
          onClick={() => removeItem(item.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
