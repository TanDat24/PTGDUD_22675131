import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./page/Dashboard";
import Projects from "./page/Projects";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1">
                    <Header />
                    <main className="flex-1 p-8 bg-gray-50">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route
                                path="/teams"
                                element={<div>Teams Page</div>}
                            />
                            <Route
                                path="/analytics"
                                element={<div>Analytics Page</div>}
                            />
                            <Route
                                path="/messages"
                                element={<div>Messages Page</div>}
                            />
                            <Route
                                path="/integrations"
                                element={<div>Integrations Page</div>}
                            />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
