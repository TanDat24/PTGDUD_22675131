import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../app/counterApp/features/counterSlice'; 
import todoReducer from '../app/toDoList/todoApp/todoSlice'; 
import themeReducer from '../app/toggleTheme/themeSlice';
import cartReducer from '../app/shoppingCart/cartSlice';
import userReducer from '../app/authLogin/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
