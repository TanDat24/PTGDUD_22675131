import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import images from "../assets/image";
import { useCart } from "./CartContext";

const recipes = [
    {
        id: 1,
        title: "Italian-style tomato salad",
        category: "Salads",
        image: images().anh1,
        rating: "15.000",
    },
    {
        id: 2,
        title: "Vegetable and shrimp spaghetti",
        category: "Pasta",
        image: images().anh2,
        rating: "15.000",
    },
    {
        id: 3,
        title: "Lotus delight salad",
        category: "Salads",
        image: images().anh3,
        rating: "15.000",
    },
    {
        id: 4,
        title: "Snack cakes",
        category: "Desserts",
        image: images().anh4,
        rating: "15.000",
    },
    {
        id: 5,
        title: "Salad with cabbage and shrimp",
        category: "Salads",
        image: images().anh5,
        rating: "15.000",
    },
    {
        id: 6,
        title: "Beans, shrimp, and potato salad",
        category: "Salads",
        image: images().anh4,
        rating: "15.000",
    },
    {
        id: 7,
        title: "Sunny-side up fried eggs",
        category: "Breakfast",
        image: images().anh1,
        rating: "15.000",
    },
    {
        id: 8,
        title: "Lotus delight salad",
        category: "Salads",
        image: images().anh2,
        rating: "15.000",
    },
];

const RecipeBoxPage = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const toggleFavorite = (recipeId) => {
        setFavoriteRecipes((prev) =>
            prev.includes(recipeId)
                ? prev.filter((id) => id !== recipeId)
                : [...prev, recipeId]
        );
    };

    const categories = [
        "All",
        ...new Set(recipes.map((recipe) => recipe.category)),
    ];

    const filteredRecipes =
        selectedCategory === "All"
            ? recipes
            : recipes.filter((recipe) => recipe.category === selectedCategory);

    const { addToCart } = useCart();
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Profile Section */}
            <div className="flex items-center space-x-6 mb-8">
                <motion.img
                    src={images().avatar}
                    alt="Emma Gonzales"
                    className="w-24 h-24 rounded-full border-4 border-pink-500"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Emma Gonzalez's Recipe Box
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Emma Gonzalez is a deputy editor at Chefify, bringing
                        her expertise as a former cooking editor at The Los
                        Angeles Times. She is also an accomplished native food
                        contributor, contributing to numerous cookbooks and food
                        publications.
                    </p>
                    <div className="mt-4 space-x-4">
                        <span className="text-gray-500">6.6k Subscribers</span>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
                            Share +
                        </button>
                    </div>
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex space-x-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full ${
                            selectedCategory === category
                                ? "bg-pink-500 text-white"
                                : "bg-gray-200 text-gray-700"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Recipes Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {filteredRecipes.map((recipe) => (
                    <motion.div
                        key={recipe.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-48 object-cover"
                            />
                            <button
                                onClick={() => toggleFavorite(recipe.id)}
                                className="absolute top-2 right-2 bg-white/70 rounded-full p-2"
                            >
                                <Heart
                                    size={24}
                                    className={`${
                                        favoriteRecipes.includes(recipe.id)
                                            ? "text-red-500 fill-current"
                                            : "text-gray-500"
                                    }`}
                                />
                            </button>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800">
                                {recipe.title}
                            </h3>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center">
                                    <div
                                        className="text-yellow-500 mr-1"
                                        size={16}
                                    />
                                    <span className="text-gray-600">
                                        {recipe.rating}
                                    </span>
                                </div>
                                <span className="text-gray-500 text-sm">
                                    <button
                                        type="button"
                                        className="bg-[#f6339a] text-xl text-white p-2 w-ful pl-2 pr-2 rounded"
                                        onClick={() => addToCart(recipe)}
                                    >
                                        Thêm
                                    </button>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-8 bg-gray-100 rounded-full p-2 w-64 mx-auto">
                <button className="text-gray-600 hover:text-pink-500">
                    {"<"}
                </button>
                <span className="text-gray-700">Page 4 / 9</span>
                <button className="text-gray-600 hover:text-pink-500">
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default RecipeBoxPage;
