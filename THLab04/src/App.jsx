import React from "react";
import ChefifyHeader from "./components/ChefifyHeader";
import RecipeBoxPage from  "./pages/RecipeBoxPage";
import ChefifyFooter from "./components/ChefifyFooter";
import { CartProvider } from "./components/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePage";

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <ChefifyHeader />

                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<HomePages />} />   
                            <Route path="/profile" element={<RecipeBoxPage />} />
                        </Routes>
                    </main>

                    <ChefifyFooter />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
