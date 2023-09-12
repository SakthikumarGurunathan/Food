// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  // Get cart items from the Redux store
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)

  // Helper function to calculate the total price of items in the cart
//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {/* {
        cartItems.map((each)=>{
            return (
            <div>
                {each.card.info.isVeg?<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#0f8a65" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#e43b4f" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg>}
                <p>{each.card.info.name}</p>
                <p className='each-menu-item mt-4' style={{fontSize:"14px"}}>₹{each?.card?.info?.price/100 || each?.card?.info?.defaultPrice/100}</p>
            </div>
            )
        })
      } */}
    </div>
  );
};

export default Cart;
