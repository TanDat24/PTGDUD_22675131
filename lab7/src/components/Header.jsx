import React from "react";

const Header = () => {
    return (
        <header className="flex items-center p-4 bg-white">
            <h1 className="text-2xl font-semibold text-pink-500">Dashboard</h1>
            <div className="flex items-center justify-end w-full px-4">
                <div className="flex-1 max-w-xl">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border-none focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-4 ml-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                    <button className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                            <img
                                src="https://ui-avatars.com/api/?name=User&background=FDF2F8&color=DB2777"
                                alt="User avatar"
                                className="w-8 h-8 rounded-full"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
