// src/App.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Counter from "./app/counterApp/Counter";
import ToDoList from "./app/toDoList/todoApp/ToDoList";
import Theme from "./app/toggleTheme/Theme";
import Cart from "./app/shoppingCart/Cart";
import UserLogin from "./app/authLogin/UserLogin";  
import UserDashboard from "./app/authLogin/UserDashboard"; 

function App() {
  return (
    <div className="p-4">
      <nav className="mb-6 space-x-4">
        <Link to="/">Chọn chức năng</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/counter" className="text-blue-500 hover:underline">
                Counter App
              </Link>
              <br />
              <Link to="/todo" className="text-blue-500 hover:underline">
                To Do List
              </Link>
              <br />
              <Link to="/toggle" className="text-blue-500 hover:underline">
                Toggle Theme
              </Link>
              <br />
              <Link to="/shopping" className="text-blue-500 hover:underline">
                Shopping cart
              </Link>
              <br />
              <Link to="/auth/login" className="text-blue-500 hover:underline">
                Auth Login {" "}
              </Link>
              {/* <Link to="/auth/dashboard" className="text-blue-500 hover:underline">
                Auth dashboard
              </Link> */}
            </div>
          }
        />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/toggle" element={<Theme />} />
        <Route path="/shopping" element={<Cart />} />

        <Route path="/auth/login" element={<UserLogin />} />
        <Route path="/auth/dashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
