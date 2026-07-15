import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Activity, LayoutDashboard, LogOut, PlusCircle } from 'lucide-react';
import './Layout.css';

export default function Layout() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="layout-container">
      <nav className="sidebar glassmorphism">
        <div className="sidebar-header">
          <Activity size={32} color="var(--accent-primary)" />
          <h1 className="logo-text">FitTrack</h1>
        </div>
        
        {currentUser ? (
          <>
            <div className="sidebar-nav">
              <Link to="/" className="nav-link">
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>
              <Link to="/track" className="nav-link">
                <PlusCircle size={20} />
                <span>Track Workout</span>
              </Link>
            </div>
            
            <div className="sidebar-footer">
              <div className="user-info">
                <span>{currentUser.email}</span>
              </div>
              <button onClick={handleLogout} className="btn-logout">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </>
        ) : (
          <div className="sidebar-nav">
             <Link to="/login" className="nav-link">
                <span>Login</span>
              </Link>
          </div>
        )}
      </nav>
      
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
