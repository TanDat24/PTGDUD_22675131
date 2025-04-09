import React from "react";
import CartIcon from "../assets/img/cart-shopping-svgrepo-com.svg";
import DollarIcon from "../assets/img/dollar-symbol-svgrepo-com.svg";
import ProfileIcon from "../assets/img/profile-circle-svgrepo-com.svg";

const StatCard = ({ title, value, change, icon, bgColor }) => (
    <div className={`rounded-lg p-6 flex-1 ${bgColor}`}>
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-600">{title}</h3>
            <span className="text-2xl">{icon}</span>
        </div>
        <div className="space-y-2">
            <p className="text-3xl font-bold">{value}</p>
            <p
                className={`text-sm ${
                    change > 0 ? "text-green-500" : "text-red-500"
                }`}
            >
                {change > 0 ? "↑" : "↓"} {Math.abs(change)}% period of change
            </p>
        </div>
    </div>
);

const Overview = () => {
    const stats = [
        {
            title: "Turnover",
            value: "$92,405",
            change: 5.39,
            bgColor: "bg-[#fff0f5]",
            icon: (
                <img
                    src={CartIcon}
                    width="30"
                    height="30"
                    className="transition-colors"
                />
            ),
        },
        {
            title: "Profit",
            value: "$32,218",
            change: 5.39,
            bgColor: "bg-[#eff6ff]",
            icon: (
                <img
                    src={DollarIcon}
                    width="30"
                    height="30"
                    className="transition-colors"
                />
            ),
        },
        {
            title: "New customer",
            value: "298",
            change: 6.84,
            bgColor: "bg-[#f0f7fd]",
            icon: (
                <img
                    src={ProfileIcon}
                    width="30"
                    height="30"
                    className="transition-colors"
                />
            ),
        },
    ];

    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </div>
    );
};

export default Overview;
