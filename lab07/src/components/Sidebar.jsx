import React, { useState } from "react";
import { images } from "../assets/index.jsx";
import DashboardIcon from "../assets/img/dashboard-2-svgrepo-com.svg";
import ProjectIcon from "../assets/img/folder-file-project-svgrepo-com.svg";
import TeamIcon from "../assets/img/team-group-svgrepo-com.svg";
import AnalyticsIcon from "../assets/img/analytics-chart-diagram-pie-svgrepo-com.svg";
import MessageIcon from "../assets/img/message-square-lines-alt-svgrepo-com.svg";
import CodeIcon from "../assets/img/code-svgrepo-com.svg";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(1);

    const menuItems = [
        {
            id: 1,
            title: "Dashboard",
            icon: (
                <img
                    src={DashboardIcon}
                    width="20"
                    height="20"
                    className={`transition-colors ${
                        activeItem === 1
                            ? "brightness-0 invert"
                            : "opacity-50 filter-gray-500"
                    }`}
                    style={{
                        filter:
                            activeItem === 1
                                ? "none"
                                : "invert(48%) sepia(0%) saturate(1058%) hue-rotate(187deg) brightness(89%) contrast(89%)",
                    }}
                />
            ),
        },
        {
            id: 2,
            title: "Projects",
            icon: (
                <img
                    src={ProjectIcon}
                    width="20"
                    height="20"
                    className={`transition-colors ${
                        activeItem === 2
                            ? "brightness-0 invert"
                            : "opacity-50 filter-gray-500"
                    }`}
                    style={{
                        filter:
                            activeItem === 2
                                ? "none"
                                : "invert(48%) sepia(0%) saturate(1058%) hue-rotate(187deg) brightness(89%) contrast(89%)",
                    }}
                />
            ),
        },
        {
            id: 3,
            title: "Teams",
            icon: (
                <img
                    src={TeamIcon}
                    width="20"
                    height="20"
                    className={`transition-colors ${
                        activeItem === 3
                            ? "brightness-0 invert"
                            : "opacity-50 filter-gray-500"
                    }`}
                    style={{
                        filter:
                            activeItem === 3
                                ? "none"
                                : "invert(48%) sepia(0%) saturate(1058%) hue-rotate(187deg) brightness(89%) contrast(89%)",
                    }}
                />
            ),
        },
        {
            id: 4,
            title: "Analytics",
            icon: (
                <img
                    src={AnalyticsIcon}
                    width="20"
                    height="20"
                    className={`transition-colors ${
                        activeItem === 4
                            ? "brightness-0 invert"
                            : "opacity-50 filter-gray-500"
                    }`}
                    style={{
                        filter:
                            activeItem === 4
                                ? "none"
                                : "invert(48%) sepia(0%) saturate(1058%) hue-rotate(187deg) brightness(89%) contrast(89%)",
                    }}
                />
            ),
        },
        {
            id: 5,
            title: "Messages",
            icon: (
                <img
                    src={MessageIcon}
                    width="20"
                    height="20"
                    className={`transition-colors ${
                        activeItem === 5
                            ? "brightness-0 invert"
                            : "opacity-50 filter-gray-500"
                    }`}
                    style={{
                        filter:
                            activeItem === 5
                                ? "none"
                                : "invert(48%) sepia(0%) saturate(1058%) hue-rotate(187deg) brightness(89%) contrast(89%)",
                    }}
                />
            ),
        },
        {
            id: 6,
            title: "Integrations",
            icon: (
                <img
                    src={CodeIcon}
                    width="20"
                    height="20"
                    className={`transition-colors ${
                        activeItem === 6
                            ? "brightness-0 invert"
                            : "opacity-50 filter-gray-500"
                    }`}
                    style={{
                        filter:
                            activeItem === 6
                                ? "none"
                                : "invert(48%) sepia(0%) saturate(1058%) hue-rotate(187deg) brightness(89%) contrast(89%)",
                    }}
                />
            ),
        },
    ];

    return (
        <aside className="w-64 bg-white min-h-screen p-6">
            <div className="flex items-center mb-8">
                <img src={images.logo} alt="Logo" className="h-[150px]" />
            </div>

            <nav>
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => setActiveItem(item.id)}
                                className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                                    activeItem === item.id
                                        ? "bg-pink-500 text-white"
                                        : "text-gray-500 hover:bg-gray-100"
                                }`}
                            >
                                <span className="mr-3">{item.icon}</span>
                                <span className="font-medium">
                                    {item.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <img src={images.tryNow} className="pt-[8rem]" />
        </aside>
    );
};

export default Sidebar;
