import React, { useEffect, useState } from "react";
import { Search, User, ShoppingCart } from "lucide-react";
import images from "../assets/image";
import { useCart } from "./CartContext";
import ModelCart from "../model/ModelCart";
const ChefifyHeader = () => {
    const { cartItems } = useCart();
    const [searchTerm, setSearchTerm] = useState("");
    const [headerData, setHeaderData] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    useEffect(() => {
        const fetchHeader = () => {
            fetch("https://67c81ffe0acf98d07084fcd9.mockapi.io/apiHeader")
                .then((response) => response.json())
                .then((data) => setHeaderData(data))
                .catch((error) => console.error("Error fetching data:", error));
        };

        fetchHeader();
    }, []);

    return (
        <>
            <header className="bg-white shadow-sm py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img
                            src={images().logo}
                            alt="Chefify Logo"
                            className="w-10 h-10"
                        />

                        <span className="text-pink-500 font-bold text-xl">
                            Chefify
                        </span>
                    </div>

                    <div className="flex-grow mx-8 max-w-xl relative">
                        <input
                            type="text"
                            placeholder="What would you like to cook?"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                    </div>

                    <nav className="flex items-center space-x-6">
                        <div className="flex space-x-6 text-gray-700">
                            {headerData.map((item, index) => (
                                <a
                                    href="#"
                                    className="hover:text-pink-500"
                                    key={index}
                                >
                                    {item.item}{" "}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <button
                                className="text-gray-700 hover:text-pink-500 relative"
                                onClick={() => setIsCartOpen(true)}
                            >
                                <ShoppingCart size={24} />
                                {cartItems.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                        {cartItems.length}
                                    </span>
                                )}
                            </button>
                            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 flex items-center space-x-2">
                                <User size={20} />
                                <span>Your Recipe Box</span>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
            <ModelCart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </>
    );
};

export default ChefifyHeader;
