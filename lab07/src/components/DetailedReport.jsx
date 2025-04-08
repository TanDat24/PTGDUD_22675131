import React from "react";

const DetailedReport = () => {
    const orders = [
        {
            id: 1,
            customer: "Elizabeth Lee",
            company: "AvatarSystems",
            value: "$359",
            date: "10/07/2023",
            status: "New",
        },
        {
            id: 2,
            customer: "Carlos Garcia",
            company: "SmoozeShift",
            value: "$747",
            date: "24/07/2023",
            status: "New",
        },
        {
            id: 3,
            customer: "Elizabeth Bailey",
            company: "Prime Time Telecom",
            value: "$564",
            date: "08/08/2023",
            status: "In-progress",
        },
        {
            id: 4,
            customer: "Ryan Brown",
            company: "OmniTech Corporation",
            value: "$541",
            date: "31/08/2023",
            status: "In-progress",
        },
        {
            id: 5,
            customer: "Ryan Young",
            company: "DataStream Inc.",
            value: "$769",
            date: "01/05/2023",
            status: "Completed",
        },
        {
            id: 6,
            customer: "Hailey Adams",
            company: "FlowRush",
            value: "$922",
            date: "10/06/2023",
            status: "Completed",
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "New":
                return "bg-blue-100 text-blue-600";
            case "In-progress":
                return "bg-yellow-100 text-yellow-600";
            case "Completed":
                return "bg-green-100 text-green-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Detailed report</h2>
                <div className="space-x-4">
                    <button className="px-4 py-2 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50">
                        Import
                    </button>
                    <button className="px-4 py-2 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50">
                        Export
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                <input type="checkbox" className="rounded" />
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                CUSTOMER NAME
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                COMPANY
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                ORDER VALUE
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                ORDER DATE
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                STATUS
                            </th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        className="rounded"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                                        {order.customer}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    {order.company}
                                </td>
                                <td className="px-6 py-4">{order.value}</td>
                                <td className="px-6 py-4 text-gray-500">
                                    {order.date}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                                            order.status
                                        )}`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-gray-400 hover:text-gray-600">
                                        ✏️
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="px-6 py-4 flex items-center justify-between border-t">
                    <p className="text-sm text-gray-500">63 results</p>
                    <div className="flex space-x-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg">
                            ←
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-500 text-white">
                            1
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg">
                            2
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg">
                            3
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg">
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedReport;
