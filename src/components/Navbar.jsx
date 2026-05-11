import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Mountain, Home as HomeIcon, Map, Compass, Leaf, CloudSun, User, Menu, X 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar({ onProfileClick }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { user } = useAuth();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Mobile Menu Backdrop */}
            <div 
                className={`mobile-menu-backdrop ${isMenuOpen ? 'active' : ''}`} 
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <nav className={`global-navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="navbar-container">
                    <Link to="/" className="nav-brand">
                        <div className="brand-logo-small">
                            <Mountain size={20} color="white" />
                        </div>
                        <div className="brand-text">
                            <span className="brand-name">ExploreSmart</span>
                            <span className="brand-sub">AI Travel Planner</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="nav-links-desktop">
                        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                            <HomeIcon size={18} /> <span>Home</span>
                        </Link>
                        <Link to="/plan" className={`nav-link ${isActive('/plan') ? 'active' : ''}`}>
                            <Map size={18} /> <span>Plan Trip</span>
                        </Link>
                        <Link to="/explore" className={`nav-link ${isActive('/explore') ? 'active' : ''}`}>
                            <Compass size={18} /> <span>Explore Trips</span>
                        </Link>
                        <Link to="/eco" className={`nav-link ${isActive('/eco') ? 'active' : ''}`}>
                            <Leaf size={18} /> <span>Eco Insights</span>
                        </Link>
                        <Link to="/weather" className={`nav-link ${isActive('/weather') ? 'active' : ''}`}>
                            <CloudSun size={18} /> <span>Weather</span>
                        </Link>
                    </div>

                    <div className="nav-actions">
                        <div className="nav-profile" onClick={() => { onProfileClick(); setIsMenuOpen(false); }}>
                            <div className="profile-icon">
                                {user?.picture ? (
                                    <img src={user.picture} alt={user.displayName} className="profile-img" />
                                ) : (
                                    <User size={18} color="white" />
                                )}
                            </div>
                            <div className="profile-text">
                                <span className="profile-name">{user?.displayName || 'Guest'}</span>
                                <span className="profile-action">View Profile</span>
                            </div>
                        </div>

                        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(true)}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Sidebar */}
                <div className={`nav-links-mobile ${isMenuOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-header">
                        <div className="nav-brand">
                            <div className="brand-logo-small">
                                <Mountain size={20} color="white" />
                            </div>
                            <div className="brand-text">
                                <span className="brand-name">ExploreSmart</span>
                            </div>
                        </div>
                        <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="mobile-links-container">
                        <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            <HomeIcon size={24} /> <span>Home</span>
                        </Link>
                        <Link to="/plan" className={`mobile-nav-link ${isActive('/plan') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            <Map size={24} /> <span>Plan Trip</span>
                        </Link>
                        <Link to="/explore" className={`mobile-nav-link ${isActive('/explore') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            <Compass size={24} /> <span>Explore Trips</span>
                        </Link>
                        <Link to="/eco" className={`mobile-nav-link ${isActive('/eco') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            <Leaf size={24} /> <span>Eco Insights</span>
                        </Link>
                        <Link to="/weather" className={`mobile-nav-link ${isActive('/weather') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                            <CloudSun size={24} /> <span>Weather</span>
                        </Link>
                    </div>

                    <div className="mobile-menu-footer">
                        <div className="nav-profile" onClick={() => { onProfileClick(); setIsMenuOpen(false); }}>
                            <div className="profile-icon">
                                {user?.picture ? (
                                    <img src={user.picture} alt={user.displayName} className="profile-img" />
                                ) : (
                                    <User size={20} color="white" />
                                )}
                            </div>
                            <div className="profile-text">
                                <span className="profile-name">{user?.displayName || 'Guest'}</span>
                                <span className="profile-action">Account Settings</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
