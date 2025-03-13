// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Bookmark } from "lucide-react";
const Cart = ({
    addToCart,
    image,
    title,
    time,
    recipeId,
    toggleFavorite,
    isFavorite,
}) => {
    return (
        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden  h-[20rem]">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4 flex justify-between items-start pt-12">
                <div>
                    <h3 className="font-bold text-lg mb-1">{title}</h3>
                    <div className="w-[200px]">
                        <span className="text-pink-500 text-sm flex justify-between">
                            {time} minutes
                            <span className="text-gray-500 text-sm">
                                <button
                                    type="button"
                                    className="bg-[#f6339a] text-sm text-white p-2 w-full rounded"
                                    onClick={() => addToCart()}
                                >
                                    Thêm
                                </button>
                            </span>
                        </span>
                    </div>
                </div>

                <Bookmark
                    className={`cursor-pointer ${
                        isFavorite ? "text-pink-500" : "text-gray-400"
                    } border w-[36px] h-auto p-2 rounded-3xl border-pink-500 mr-2`}
                    onClick={() => toggleFavorite(recipeId)}
                />
            </div>
        </div>
    );
};

export default Cart;
