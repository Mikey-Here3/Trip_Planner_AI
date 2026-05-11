import React, { useState } from 'react';
import {
    MapPin, TrendingUp, Award, Users, Settings, Lock, Mail,
    Sparkles, X, Send, Leaf, Mountain, Home as HomeIcon, Map as MapIcon, Compass, CloudSun
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTripContext } from '../context/TripContext';

import './Dashboard.css';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('My Trips');
    const { user } = useAuth();
    const { savedTripsCount } = useTripContext();

    return (
        <div className="dashboard-page">
            <main className="dashboard-main">
                {/* Header Profile Section */}
                <header className="dashboard-header">
                    <div className="header-avatar">
                        {user?.picture ? (
                            <img src={user.picture} alt={user.displayName} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                        ) : (
                            <Users size={40} color="white" />
                        )}
                    </div>
                    <div className="header-info">
                        <h1>My Dashboard</h1>
                        <p>Welcome back,<br />{user?.displayName || 'Guest'}!</p>
                    </div>
                </header>

                {/* Stats Cards Section */}
                <section className="stats-cards-grid">
                    <div className="stat-card">
                        <div className="stat-icon-wrapper">
                            <MapPin size={24} className="text-blue-500" />
                            <span className="stat-label-small">Total</span>
                        </div>
                        <h2>{savedTripsCount}</h2>
                        <p>Saved Trips</p>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon-wrapper">
                            <Leaf size={24} className="text-green-500" />
                            <span className="stat-label-small">High</span>
                        </div>
                        <h2>85</h2>
                        <p>Eco Score</p>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon-wrapper">
                            <TrendingUp size={24} className="text-purple-500" />
                            <span className="stat-label-small">Level</span>
                        </div>
                        <h2>12</h2>
                        <p>Travel Points</p>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon-wrapper">
                            <Award size={24} className="text-yellow-500" />
                            <span className="stat-label-small">Earned</span>
                        </div>
                        <h2>5</h2>
                        <p>Badges</p>
                    </div>
                </section>

                {/* Dashboard Content Tabs */}
                <div className="dashboard-content-area">
                    <div className="tabs-container">
                        <div className="tabs-nav">
                            <div className={`tab-item ${activeTab === 'My Trips' ? 'active' : ''}`} onClick={() => setActiveTab('My Trips')}>
                                <span>My Trips</span>
                            </div>
                            <div className={`tab-item ${activeTab === 'Eco Impact' ? 'active' : ''}`} onClick={() => setActiveTab('Eco Impact')}>
                                <span>Eco Impact</span>
                            </div>
                            <div className={`tab-item ${activeTab === 'Settings' ? 'active' : ''}`} onClick={() => setActiveTab('Settings')}>
                                <span>Settings</span>
                            </div>
                        </div>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'My Trips' && (
                            <div className="empty-state">
                                <div className="empty-icon-wrapper">
                                    <MapPin size={60} color="#cbd5e1" strokeWidth={1} />
                                </div>
                                <h3>No active trips yet</h3>
                                <p>Start planning your next Pakistan adventure today!</p>
                                <button className="btn-plan-first">Plan Your First Trip</button>
                            </div>
                        )}

                        {activeTab === 'Eco Impact' && (
                            <div className="eco-impact-summary">
                                <h3 className="section-title">Your Environmental Impact</h3>
                                <div className="overall-score-card">
                                    <div className="score-info">
                                        <h3>Overall Sustainability Score</h3>
                                        <p>Excellent! You're among the top 10% eco-travelers.</p>
                                    </div>
                                    <div className="score-value">
                                        <span className="huge-number">85</span>
                                        <span className="score-denominator">/ 100</span>
                                    </div>
                                </div>
                                <div className="impact-cards-row">
                                    <div className="impact-card footprint-card">
                                        <Leaf size={20} className="mb-3 icon-green" />
                                        <h4>Carbon Footprint Saved</h4>
                                        <div className="impact-value text-green-dark">12.5 kg</div>
                                        <p>Equivalent to planting 2 trees</p>
                                    </div>
                                    <div className="impact-card group-card">
                                        <Users size={20} className="mb-3 icon-blue" />
                                        <h4>Community Support</h4>
                                        <div className="impact-value text-blue-dark">High</div>
                                        <p>You prefer local-owned businesses</p>
                                    </div>
                                </div>
                                <div className="achievements-section">
                                    <div className="achievement-header">
                                        <TrendingUp size={18} className="text-orange" />
                                        <h3>Recent Achievements</h3>
                                    </div>
                                    <div className="achievement-item">
                                        <div className="achievement-icon bg-green-solid">
                                            <Leaf size={16} color="white" />
                                        </div>
                                        <div className="achievement-text">
                                            <h4>Plastic Free Hero</h4>
                                            <p>Used zero single-use plastics on last trip</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Settings' && (
                            <div className="account-settings-content">
                                <h3 className="section-title">Account Settings</h3>
                                <div className="settings-section">
                                    <div className="settings-header">
                                        <Users size={18} className="icon-emerald-dark" />
                                        <h3>Personal Information</h3>
                                    </div>
                                    <div className="settings-body">
                                        <div className="form-group-acc">
                                            <label>Full Name</label>
                                            <input type="text" className="settings-input" defaultValue={user?.displayName || ''} />
                                        </div>
                                        <div className="form-group-acc">
                                            <label>Email Address</label>
                                            <input type="email" className="settings-input" defaultValue={user?.email || ''} disabled />
                                        </div>
                                    </div>
                                </div>
                                <div className="settings-section">
                                    <div className="settings-header">
                                        <Lock size={18} className="icon-emerald-dark" />
                                        <h3>Security</h3>
                                    </div>
                                    <div className="settings-body">
                                        <div className="form-group-acc">
                                            <label>Password</label>
                                            <button className="settings-input" style={{ textAlign: 'left', cursor: 'pointer' }}>Change Password</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
