import React, { useState } from 'react';
import { Slider } from '@mui/material';
import { FaStar } from 'react-icons/fa';
import images from "../assets/image";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
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


const HomePages = () => {
    
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [timeRange, setTimeRange] = useState([30, 50]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const types = ["Pan-fried", "Stir-fried", "Grilled", "Roasted", "Sauteed", "Baked", "Steamed", "Stewed"];
    const ratings = [1, 2, 3, 4, 5];

    const handleTypeChange = (type) => {
        setSelectedTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const handleRatingChange = (rating) => {
        setSelectedRatings(prev =>
            prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
        );
    };
    const filteredRecipes =
    selectedCategory === "All"
        ? recipes
        : recipes.filter((recipe) => recipe.category === selectedCategory);
    return (
        <div className="container mx-auto pb-4">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 pt-4">
                <div className="w-full p-4 bg-white rounded-xl shadow border border-[#dfdfdf]">
                    <h2 className="text-xl font-bold mb-4">☰ FILTERS</h2>
                    <div>
                        <h3 className="font-bold mb-2">Type</h3>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                            {types.map(type => (
                                <label key={type} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedTypes.includes(type)}
                                        onChange={() => handleTypeChange(type)}
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
                            onChange={(e, newValue) => setTimeRange(newValue)}
                            valueLabelDisplay="auto"
                            min={0}
                            max={120}
                            step={10}
                            sx={{ color: '#ec4899' }}
                        />
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold mb-2">Rating</h3>
                        <div className="space-y-2">
                            {ratings.map(rating => (
                                <label key={rating} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedRatings.includes(rating)}
                                        onChange={() => handleRatingChange(rating)}
                                        className="mr-2 accent-pink-500"
                                    />
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            className={`mr-1 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </label>
                            ))}
                        </div>
                    </div>
                    <button className="w-full bg-pink-500 text-white mt-4 rounded">Apply</button>
                </div>
                </div>
                <div className="col-span-3">
                    <div className='flex justify-between'>
                        <h1 className="text-xl font-bold mb-4 pt-4">Salad 36</h1>
                        <button type="button" class="inline-flex w-[100px] h-[30px] mt-4 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Options
                            <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4">
                        <div className=''>
                        {filteredRecipes.map((recipe) => (
                            <motion.div
                                key={recipe.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                
                            </motion.div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePages;