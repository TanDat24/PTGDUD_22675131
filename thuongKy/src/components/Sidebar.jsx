import React, { useState } from "react";
import { images } from "../assets/index.jsx";
import DashboardIcon from "../assets/img/dashboard-2-svgrepo-com.svg";
import ProjectIcon from "../assets/img/folder-file-project-svgrepo-com.svg";
import TeamIcon from "../assets/img/team-group-svgrepo-com.svg";
import AnalyticsIcon from "../assets/img/analytics-chart-diagram-pie-svgrepo-com.svg";
import MessageIcon from "../assets/img/message-square-lines-alt-svgrepo-com.svg";
import CodeIcon from "../assets/img/code-svgrepo-com.svg";

const Sidebar = ({ onMenuSelect }) => {
    const [activePath, setActivePath] = useState("/");

    const menuItems = [
        {
            id: 1,
            title: "Dashboard",
            path: "/",
            icon: DashboardIcon,
        },
        {
            id: 2,
            title: "Projects",
            path: "/projects",
            icon: ProjectIcon,
        },
        {
            id: 3,
            title: "Teams",
            path: "/teams",
            icon: TeamIcon,
        },
        {
            id: 4,
            title: "Analytics",
            path: "/analytics",
            icon: AnalyticsIcon,
        },
        {
            id: 5,
            title: "Messages",
            path: "/messages",
            icon: MessageIcon,
        },
        {
            id: 6,
            title: "Integrations",
            path: "/integrations",
            icon: CodeIcon,
        },
    ];

    const handleMenuClick = (path) => {
        setActivePath(path);
        if (onMenuSelect) {
            onMenuSelect(path);
        }
    };

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
                                onClick={() => handleMenuClick(item.path)}
                                className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                                    activePath === item.path
                                        ? "bg-pink-500 text-white"
                                        : "text-gray-500 hover:bg-gray-100"
                                }`}
                            >
                                <span className="mr-3">
                                    <img
                                        src={item.icon}
                                        width="20"
                                        height="20"
                                        className={`transition-colors ${
                                            activePath === item.path
                                                ? "brightness-0 invert"
                                                : "opacity-50"
                                        }`}
                                        style={{
                                            filter:
                                                activePath === item.path
                                                    ? "none"
                                                    : "invert(48%) sepia(0%) saturate(1058%) hue-rotate(187deg) brightness(89%) contrast(89%)",
                                        }}
                                    />
                                </span>
                                <span className="font-medium">
                                    {item.title}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <img src={images.tryNow} className="pt-[8rem]" alt="Try Now" />
        </aside>
    );
};

export default Sidebar;
