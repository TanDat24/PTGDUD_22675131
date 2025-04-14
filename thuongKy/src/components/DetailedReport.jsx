import React from "react";
import Overview from "./Overview";

const DetailedReport = () => {
    return (
        <div>
            <Overview />
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Detailed report</h2>
                <div className="space-x-4">
                    <button className="px-4 py-2 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50">
                        Edit
                    </button>
                    <button className="px-4 py-2 text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50">
                        Add new
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden"></div>
        </div>
    );
};

export default DetailedReport;
