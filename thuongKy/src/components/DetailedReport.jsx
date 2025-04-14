import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import PenIcon from "../assets/img/pen-svgrepo-com.svg";
import EditModal from "../model/EditModal";
import Overview from "./Overview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DetailedReport = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [filterText, setFilterText] = useState("");
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

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

    const handleEdit = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };
    const handleCreate = async (formData) => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://67e2d7ea97fc65f53537d5eb.mockapi.io/baithi",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        customer: {
                            customerName: formData.customerName,
                            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg", // Avatar mặc định
                        },
                        company: formData.company,
                        value: formData.value,
                        date: formData.date,
                        status: formData.status || "New",
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to create order");
            }

            await fetchOrders();
            setIsModalOpen(false);

            toast.success("Order created successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } catch (error) {
            console.error("Error creating order:", error);
            toast.error("Failed to create order");
        } finally {
            setLoading(false);
        }
    };
    const handleSave = async (formData) => {
        if (selectedOrder?.id) {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://67e2d7ea97fc65f53537d5eb.mockapi.io/baithi/${selectedOrder.id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            customer: {
                                customerName: formData.customerName,
                                avatar: selectedOrder.customer.avatar,
                            },
                            company: formData.company,
                            value: formData.value,
                            date: formData.date,
                            status: formData.status,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to update order");
                }

                await fetchOrders();
                setIsModalOpen(false);

                toast.success("Order updated successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            } catch (error) {
                console.error("Error updating order:", error);
                toast.error("Failed to update order");
            } finally {
                setLoading(false);
            }
        } else {
            await handleCreate(formData);
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

    const filteredItems = orders.filter(
        (item) =>
            item.customer.customerName
                ?.toLowerCase()
                .includes(filterText.toLowerCase()) ||
            item.company?.toLowerCase().includes(filterText.toLowerCase())
    );

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
            cell: (row) => (
                <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => handleEdit(row)}
                >
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
            <Overview />
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Detailed report</h2>
                <div className="space-x-4">
                    <button
                        className="px-4 py-2 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50"
                        onClick={() => handleEdit({})}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleEdit({})}
                        className="px-4 py-2 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50"
                    >
                        Add new
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden">
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    progressPending={loading}
                    customStyles={customStyles}
                    selectableRows
                    highlightOnHover
                />
            </div>

            {isModalOpen && (
                <EditModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    data={selectedOrder}
                    onSave={handleSave}
                />
            )}
            <ToastContainer />
        </div>
    );
};

export default DetailedReport;
