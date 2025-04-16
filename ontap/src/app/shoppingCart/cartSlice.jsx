import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;  
      } else {
        state.cartItems.push({ ...product, quantity: 1 });  
      }
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== productId);  
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.cartItems.find(item => item.id === productId);
      if (product) {
        product.quantity = quantity;  
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
