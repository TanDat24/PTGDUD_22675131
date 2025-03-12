import React from "react";
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "../components/CartContext";

const ModelCart = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    if (!isOpen) return null;

    const total = cartItems.reduce(
        (sum, item) => sum + parseFloat(item.rating) * item.quantity,
        0
    );

    return (
        <div className="fixed inset-0 bg-[#36415357] bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Shopping Cart</h2>
                    <button onClick={onClose}>
                        <X
                            size={24}
                            className="text-gray-500 hover:text-gray-700"
                        />
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center">
                        Your cart is empty
                    </p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 mb-4 border-b pb-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div className="flex-1">
                                    <h3 className="font-medium">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.rating} VND
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                            className="p-1 bg-gray-100 rounded-full hover:bg-gray-200"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="w-8 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                            className="p-1 bg-gray-100 rounded-full hover:bg-gray-200"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        ))}

                        <div className="mt-4 pt-4 border-t">
                            <div className="flex justify-between font-bold">
                                <span>Total:</span>
                                <span>{total.toFixed(3)} VND</span>
                            </div>
                            <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600">
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ModelCart;
