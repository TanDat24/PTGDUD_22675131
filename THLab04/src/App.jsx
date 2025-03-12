import React from "react";
import ChefifyHeader from "./components/ChefifyHeader";
import RecipeBoxPage from "./components/RecipeBoxPage";
import ChefifyFooter from "./components/ChefifyFooter";
import { CartProvider } from "./components/CartContext";

function App() {
    return (
        <CartProvider>
            <div className="flex flex-col min-h-screen">
                <ChefifyHeader />

                <main className="flex-grow">
                    <RecipeBoxPage />
                </main>

                <ChefifyFooter />
            </div>
        </CartProvider>
    );
}

export default App;
