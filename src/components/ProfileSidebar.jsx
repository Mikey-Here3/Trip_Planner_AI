import React from 'react';
import {
    X, User, Heart, Settings, Bell, Shield,
    Palette, Mail, LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ProfileSidebar.css';

const ProfileSidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        onClose();
        navigate('/signin');
    };

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={onClose} />

            {/* Sidebar */}
            <div className={`profile-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <button className="close-btn" onClick={onClose}>
                        <X size={20} color="white" />
                    </button>
                    <div className="profile-info">
                        <div className="profile-avatar">
                            {user?.picture ? (
                                <img src={user.picture} alt={user.displayName} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                            ) : (
                                <User size={28} color="#059669" />
                            )}
                        </div>
                        <div className="profile-details">
                            <h2>{user?.displayName || "Welcome, Traveler"}</h2>
                            <p>{user?.email || "Explore the wonders of Pakistan"}</p>
                            {!user && (
                                <div className="guest-actions">
                                    <button className="btn-sidebar-signin" onClick={() => { onClose(); navigate('/signin'); }}>
                                        Sign In
                                    </button>
                                    <button className="btn-sidebar-register" onClick={() => { onClose(); navigate('/signup'); }}>
                                        Register
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="sidebar-menu">
                    {user && (
                        <>
                            <div className="menu-item" onClick={() => { onClose(); navigate('/dashboard'); }}>
                                <div className="menu-icon bg-light-green">
                                    <User size={20} color="#059669" />
                                </div>
                                <div className="menu-text">
                                    <h3>My Dashboard</h3>
                                    <p>View your profile & trips</p>
                                </div>
                            </div>

                            <div className="menu-item" onClick={() => { onClose(); navigate('/dashboard'); }}>
                                <div className="menu-icon bg-light-pink">
                                    <Heart size={20} color="#db2777" />
                                </div>
                                <div className="menu-text">
                                    <h3>Saved Trips</h3>
                                    <p>Your favorite destinations</p>
                                </div>
                            </div>

                            <div className="menu-item" onClick={() => { onClose(); navigate('/account-settings'); }}>
                                <div className="menu-icon bg-light-blue">
                                    <Settings size={20} color="#3b82f6" />
                                </div>
                                <div className="menu-text">
                                    <h3>Account Settings</h3>
                                    <p>Manage your preferences</p>
                                </div>
                            </div>

                            <div className="menu-item" onClick={() => { onClose(); navigate('/notifications'); }}>
                                <div className="menu-icon bg-light-purple">
                                    <Bell size={20} color="#7c3aed" />
                                </div>
                                <div className="menu-text">
                                    <h3>Notifications</h3>
                                    <p>Alerts & updates</p>
                                </div>
                            </div>

                            <div className="menu-item" onClick={() => { onClose(); navigate('/privacy-security'); }}>
                                <div className="menu-icon bg-light-yellow">
                                    <Shield size={20} color="#d97706" />
                                </div>
                                <div className="menu-text">
                                    <h3>Privacy & Security</h3>
                                    <p>Data & permissions</p>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="menu-item" onClick={() => { onClose(); navigate('/appearance'); }}>
                        <div className="menu-icon bg-light-indigo">
                            <Palette size={20} color="#4f46e5" />
                        </div>
                        <div className="menu-text">
                            <h3>Appearance</h3>
                            <p>Theme & display options</p>
                        </div>
                    </div>

                    <div className="menu-item" onClick={() => { onClose(); navigate('/contact-support'); }}>
                        <div className="menu-icon bg-light-teal">
                            <Mail size={20} color="#0d9488" />
                        </div>
                        <div className="menu-text">
                            <h3>Contact Support</h3>
                            <p>Get help & assistance</p>
                        </div>
                    </div>

                    {user && (
                        <>
                            <div className="menu-divider"></div>
                            <div className="menu-item logout-item" onClick={handleLogout}>
                                <div className="menu-icon bg-light-red">
                                    <LogOut size={20} color="#dc2626" />
                                </div>
                                <div className="menu-text">
                                    <h3 className="text-red">Logout</h3>
                                    <p className="text-red">Sign out of your account</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="sidebar-footer">
                    <p>ExploreSmart v1.0 • Final Year Project</p>
                    <p>© 2026 All rights reserved</p>
                </div>
            </div>
        </>
    );
};

export default ProfileSidebar;
