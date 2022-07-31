import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  products: [],
  quantity: 0,
  total:0,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;

  },


    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.products = state.products.filter((item) => item._id !== itemId);
    },
    increase: (state,action) => {
      const itemId = action.payload;
      const cartItem = state.products.find((item) => item._id === itemId);
       console.log(cartItem);
     
       cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state,action) => {
      const itemId = action.payload;
      const cartItem = state.products.find((item) => item._id === itemId);
      cartItem.quantity = cartItem.quantity - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  }

});
export const {addProduct, clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
