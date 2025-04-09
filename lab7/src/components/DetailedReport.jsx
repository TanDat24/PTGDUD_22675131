import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import PenIcon from "../assets/img/pen-svgrepo-com.svg";

const DetailedReport = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const columns = [
        {
            name: "CUSTOMER NAME",
            selector: (row) => row.customer.customerName,
            cell: (row) => (
                <div className="flex items-center">
                    <img
                        src={row.customer.avatar}
                        alt={row.customer.customerName}
                        className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>{row.customer.customerName}</div>
                </div>
            ),
            sortable: true,
        },
        {
            name: "COMPANY",
            selector: (row) => row.company,
            sortable: true,
        },
        {
            name: "ORDER VALUE",
            selector: (row) => row.value,
            cell: (row) => `$${row.value}`,
            sortable: true,
        },
        {
            name: "ORDER DATE",
            selector: (row) => row.date,
            cell: (row) => new Date(row.date).toLocaleDateString(),
            sortable: true,
        },
        {
            name: "STATUS",
            selector: (row) => row.status,
            cell: (row) => (
                <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                        row.status
                    )}`}
                >
                    {row.status}
                </span>
            ),
            sortable: true,
        },
        {
            name: "ACTIONS",
            // eslint-disable-next-line no-unused-vars
            cell: (row) => (
                <button className="text-gray-400 hover:text-gray-600">
                    <img
                        src={PenIcon}
                        alt="Edit"
                        width="16"
                        height="16"
                        className="transition-colors"
                    />
                </button>
            ),
        },
    ];

    const customStyles = {
        headRow: {
            style: {
                backgroundColor: "#F9FAFB",
                borderBottom: "1px solid #E5E7EB",
            },
        },
        headCells: {
            style: {
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#6B7280",
                padding: "1rem 1.5rem",
            },
        },
        rows: {
            style: {
                fontSize: "0.875rem",
                padding: "1rem 1.5rem",
                "&:not(:last-of-type)": {
                    borderBottom: "1px solid #E5E7EB",
                },
            },
        },
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
                <DataTable
                    columns={columns}
                    data={orders}
                    pagination
                    progressPending={loading}
                    customStyles={customStyles}
                    selectableRows
                    highlightOnHover
                />
            </div>
        </div>
    );
};

export default DetailedReport;
