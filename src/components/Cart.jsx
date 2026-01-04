const Cart = ({
  cartItems,
  removeFromCart,
  updateQuantity,
  totalItems,
  totalPrice,
}) => {
  return (
    <div className="cart">
      <h2>Cart</h2>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>

          <div className="qty">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              −
            </button>

            <span>{item.quantity}</span>

            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </div>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <hr />
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
