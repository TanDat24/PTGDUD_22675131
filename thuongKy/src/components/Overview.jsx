import React, { useState, useEffect } from "react";
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
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const response = await fetch(
                "https://67e2d7ea97fc65f53537d5eb.mockapi.io/overview"
            );
            const data = await response.json();

            const mappedStats = data.map((item) => {
                let icon, bgColor;
                switch (item.title.toLowerCase()) {
                    case "turnover":
                        icon = CartIcon;
                        bgColor = "bg-[#fff0f5]";
                        break;
                    case "profit":
                        icon = DollarIcon;
                        bgColor = "bg-[#eff6ff]";
                        break;
                    case "new customer":
                        icon = ProfileIcon;
                        bgColor = "bg-[#f0f7fd]";
                        break;
                    default:
                        icon = CartIcon;
                        bgColor = "bg-[#fff0f5]";
                }

                return {
                    ...item,
                    icon: (
                        <img
                            src={icon}
                            width="30"
                            height="30"
                            className="transition-colors"
                            alt={item.title}
                        />
                    ),
                    bgColor,
                };
            });

            setStats(mappedStats);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching stats:", error);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <div className="grid grid-cols-3 gap-6">
                    {[1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className="rounded-lg p-6 bg-gray-100 animate-pulse h-32"
                        />
                    ))}
                </div>
            </div>
        );
    }

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
