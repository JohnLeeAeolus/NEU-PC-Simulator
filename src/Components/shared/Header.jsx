import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/logo.png" alt="Logo" className="logo" />
                <span className="brand">NEU PC Simulator</span>
            </div>
            <div className="navbar-center">
                <ul className="nav-list">
                    <li>
                        <Link to="/" className={"nav-link" + (location.pathname === "/" ? " active" : "")}>Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className={"nav-link" + (location.pathname.startsWith("/dashboard") ? " active" : "")}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/settings" className={"nav-link" + (location.pathname.startsWith("/settings") ? " active" : "")}>Settings</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <Link to="/help" className={"btn btn-primary" + (location.pathname.startsWith("/help") ? " active" : "")}>Help</Link>
            </div>
        </nav>
    );
} 