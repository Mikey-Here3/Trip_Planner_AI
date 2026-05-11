import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Mountain, Facebook, Twitter, Instagram, Linkedin, 
    Mail, Phone, MapPin, Sparkles, ArrowRight
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand-section">
                        <div className="footer-logo">
                            <div className="logo-icon">
                                <Mountain size={24} color="white" />
                            </div>
                            <span className="logo-text">Explore<span className="text-highlight">Smart</span></span>
                        </div>
                        <p className="brand-desc">
                            Revolutionizing travel in Pakistan with AI-powered intelligence, 
                            eco-friendly insights, and personalized planning for the modern explorer.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Facebook size={18} /></a>
                            <a href="#" className="social-icon"><Twitter size={18} /></a>
                            <a href="#" className="social-icon"><Instagram size={18} /></a>
                            <a href="#" className="social-icon"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h4>Platform</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/plan">Plan Your Trip</Link></li>
                                <li><Link to="/explore">Explore Destinations</Link></li>
                                <li><Link to="/weather">Weather Updates</Link></li>
                                <li><Link to="/eco">Eco Insights</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Account</h4>
                            <ul>
                                <li><Link to="/dashboard">My Dashboard</Link></li>
                                <li><Link to="/notifications">Notifications</Link></li>
                                <li><Link to="/account-settings">Settings</Link></li>
                                <li><Link to="/signin">Sign In</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Support</h4>
                            <ul>
                                <li><Link to="/contact-support">Contact Support</Link></li>
                                <li><Link to="/privacy-security">Privacy & Security</Link></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Help Center</a></li>
                            </ul>
                        </div>

                        <div className="footer-col newsletter-col">
                            <h4>Stay Inspired</h4>
                            <p>Get the latest travel tips and AI insights.</p>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Email address" />
                                <button type="button">
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                            <div className="ai-badge-footer">
                                <Sparkles size={14} color="#00e0a8" />
                                <span>AI-Optimized Content</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="contact-info-bar">
                        <div className="contact-item">
                            <Mail size={16} />
                            <span>hello@exploresmart.ai</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={16} />
                            <span>+92 300 1234567</span>
                        </div>
                        <div className="contact-item">
                            <MapPin size={16} />
                            <span>Islamabad, Pakistan</span>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} ExploreSmart AI. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
