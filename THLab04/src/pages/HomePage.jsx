import React, { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import { FaStar } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { useCart } from "../components/CartContext";
import Cart from "../components/Cart";

const HomePages = () => {
    const [recipeData, setRecipeData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    useEffect(() => {
        const fetchRecipe = () => {
            fetch("https://67d23e3290e0670699bcc2c3.mockapi.io/da/food")
                .then((response) => response.json())
                .then((data) => setRecipeData(data))
                .catch((error) => console.error("Error fetching data:", error));
        };

        fetchRecipe();
    }, []);

    const [selectedTypes, setSelectedTypes] = useState([]);
    const [timeRange, setTimeRange] = useState([30, 50]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [selectedCategory, setSelectedCategory] = useState("All");
    const types = [
        "Pan-fried",
        "Stir-fried",
        "Grilled",
        "Roasted",
        "Sauteed",
        "Baked",
        "Steamed",
        "Stewed",
    ];
    const ratings = [1, 2, 3, 4, 5];

    const handleTypeChange = (type) => {
        setSelectedTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const toggleFavorite = (recipeId) => {
        setFavoriteRecipes((prev) =>
            prev.includes(recipeId)
                ? prev.filter((id) => id !== recipeId)
                : [...prev, recipeId]
        );
    };

    const handleRatingChange = (rating) => {
        setSelectedRatings((prev) =>
            prev.includes(rating)
                ? prev.filter((r) => r !== rating)
                : [...prev, rating]
        );
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRecipes = recipeData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(recipeData.length / itemsPerPage);
    const { addToCart } = useCart();
    return (
        <div className="container mx-auto pb-4">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 pt-4">
                    <div className="w-full p-4 bg-white rounded-xl shadow border border-[#dfdfdf]">
                        <h2 className="text-xl font-bold mb-4">☰ FILTERS</h2>
                        <div>
                            <h3 className="font-bold mb-2">Type</h3>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                {types.map((type) => (
                                    <label
                                        key={type}
                                        className="flex items-center"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedTypes.includes(
                                                type
                                            )}
                                            onChange={() =>
                                                handleTypeChange(type)
                                            }
                                            className="mr-2 accent-pink-500"
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold mb-2">Time</h3>
                            <Slider
                                value={timeRange}
                                onChange={(e, newValue) =>
                                    setTimeRange(newValue)
                                }
                                valueLabelDisplay="auto"
                                min={0}
                                max={120}
                                step={10}
                                sx={{ color: "#ec4899" }}
                            />
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold mb-2">Rating</h3>
                            <div className="space-y-2">
                                {ratings.map((rating) => (
                                    <label
                                        key={rating}
                                        className="flex items-center"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedRatings.includes(
                                                rating
                                            )}
                                            onChange={() =>
                                                handleRatingChange(rating)
                                            }
                                            className="mr-2 accent-pink-500"
                                        />
                                        {[...Array(5)].map((_, index) => (
                                            <FaStar
                                                key={index}
                                                className={`mr-1 ${
                                                    index < rating
                                                        ? "text-yellow-500"
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        ))}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <button className="w-full bg-pink-500 text-white mt-4 rounded">
                            Apply
                        </button>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-bold mb-4 pt-4">
                            Salad 36
                        </h1>
                        <button
                            type="button"
                            class="items-center inline-flex w-[100px] h-[30px] mt-4 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                        >
                            Options
                            <svg
                                class="-mr-1 size-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className=" ">
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            {currentRecipes.map((recipe) => (
                                <div key={recipe.id} className="">
                                    <Cart
                                        image={recipe.image}
                                        title={recipe.title}
                                        time={recipe.rating}
                                        recipeId={recipe.id}
                                        toggleFavorite={toggleFavorite}
                                        isFavorite={favoriteRecipes.includes(
                                            recipe.id
                                        )}
                                        addToCart={() => addToCart(recipe)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-4 mt-8">
                        <button
                            onClick={() =>
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600"
                        >
                            Previous
                        </button>

                        <span>
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    Math.min(prev + 1, totalPages)
                                )
                            }
                            className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePages;
