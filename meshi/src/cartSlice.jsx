// // import { createSlice } from "@reduxjs/toolkit";
// // const cartSlice = createSlice({
// //      name:'cart',
// //      initialState:{
// //         items:[],
// //      },
// //      reducers:{
// //         addItem:(state,action)=>{
// //             state.items.push(action.payload)
// //         },
// //         removeItem:(state,action)=>{
// //             state.items.pop();
// //         },
// //         clearCart:(state,action)=>{
// //             state.items = []
// //         }
// //      }
// // })
// // export const {addItem,removeItem,clearCart} = cartSlice.actions
// // export default cartSlice.reducer; 


// // src/redux/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//     },
//     // Add more actions like remove from cart, update quantity, etc., if needed
//   },
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item exists, increment its count
        existingItem.count += 1;
      } else {
        // If the item doesn't exist, add it to the cart with a count of 1
        state.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);

      if (itemIndex !== -1) {
        // If the item exists in the cart, decrement its count
        if (state[itemIndex].count > 1) {
          state[itemIndex].count -= 1;
        } else {
          // If the count is 1, remove the item from the cart
          state.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      // Clear the entire cart
      state.length = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
