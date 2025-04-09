import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./page/Dashboard";
import Projects from "./page/Projects";
import Header from "./components/Header";
import Teams from "./page/Team";
import Analytics from "./page/Analytics";
import Messages from "./page/Messages";
import Integrations from "./page/Integrations";

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
                            <Route path="/teams" element={<Teams />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/messages" element={<Messages />} />
                            <Route
                                path="/integrations"
                                element={<Integrations />}
                            />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
