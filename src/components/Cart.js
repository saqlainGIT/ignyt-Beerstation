import React from "react";

function Cart({ cart }) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {Object.keys(cart).map((itemName) => (
          <li key={itemName}>
            {itemName}: {cart[itemName].quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
