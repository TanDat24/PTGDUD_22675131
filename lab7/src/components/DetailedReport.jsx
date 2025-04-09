import React, { useState, useEffect } from "react";
import PenIcon from "../assets/img/pen-svgrepo-com.svg";

const DetailedReport = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 6;

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
    const totalPages = Math.ceil(orders.length / ordersPerPage);

    // Handle page changes
    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // Generate page numbers array
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch(
                "https://67e2d7ea97fc65f53537d5eb.mockapi.io/baithi"
            );
            const data = await response.json();
            setOrders(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching orders:", error);
            setLoading(false);
        }
    };

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

    if (loading) {
        return <div>Loading...</div>;
    }

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
                        {currentOrders.map((order) => (
                            <tr key={order.id}>
                                <td className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        className="rounded"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <img
                                            src={order.customer.avatar}
                                            alt={order.customer}
                                            className="w-8 h-8 rounded-full mr-3"
                                        />
                                        <div>{order.customer.customerName}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    {order.company}
                                </td>
                                <td className="px-6 py-4">${order.value}</td>
                                <td className="px-6 py-4 text-gray-500">
                                    {new Date(order.date).toLocaleDateString()}
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
                                        <img
                                            src={PenIcon}
                                            alt="Edit"
                                            width="16"
                                            height="16"
                                            className="transition-colors"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="px-6 py-4 flex items-center justify-between border-t">
                    <p className="text-sm text-gray-500">
                        {orders.length} results
                    </p>
                    <div className="flex space-x-2">
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            ←
                        </button>
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                className={`w-8 h-8 flex items-center justify-center rounded-lg 
                                    ${
                                        currentPage === number
                                            ? "bg-pink-500 text-white"
                                            : "hover:bg-gray-100"
                                    }`}
                                onClick={() => handlePageChange(number)}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedReport;
