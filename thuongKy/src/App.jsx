import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1">
                    <Header />
                    <main className="flex-1 p-8 bg-gray-50">
                        <Dashboard />
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
