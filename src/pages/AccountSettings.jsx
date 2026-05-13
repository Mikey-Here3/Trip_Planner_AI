import React, { useState } from 'react';
import {
    ArrowLeft, Save, Square, CheckSquare, User, CloudSun, Compass, MapIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import './AccountSettings.css';

function AccountSettings() {
    const navigate = useNavigate();

    const { user } = useAuth();

    // Form State
    const [phone, setPhone] = useState('+92 300 1234567');
    const [location, setLocation] = useState('City, Country');
    const [about, setAbout] = useState('');

    // Preferences State
    const [ecoFriendly, setEcoFriendly] = useState(false);
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [marketing, setMarketing] = useState(false);

    const handleSaveChanges = () => {
        // Implementation for saving changes
        console.log("Saving changes...");
    };

    return (
        <div className="account-settings-page">

            <main className="settings-main">
                <button className="back-btn" onClick={() => navigate('/')}>
                    <ArrowLeft size={16} /> Back to Home
                </button>

                <div className="settings-header-title">
                    <h1>Account Settings</h1>
                    <p>Manage your profile and preferences</p>
                </div>

                {/* Profile Information Section */}
                <section className="settings-form-section">
                    <h2>Profile Information</h2>
                    
                    <div className="form-grid">
                        <div className="form-group">
                            <label><User size={16} className="input-icon" /> Full Name</label>
                            <input 
                                type="text" 
                                className="form-input" 
                                value={user?.displayName || 'Guest'} 
                                readOnly
                                disabled
                            />
                        </div>
                        
                        <div className="form-group">
                            <label><CloudSun size={16} className="input-icon opacity-0" /> Email Address</label>
                            <input 
                                type="email" 
                                className="form-input" 
                                value={user?.email || 'guest@example.com'} 
                                readOnly
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <label><Compass size={16} className="input-icon opacity-0" /> Phone Number</label>
                            <input 
                                type="tel" 
                                className="form-input" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label><MapIcon size={16} className="input-icon" /> Location</label>
                            <input 
                                type="text" 
                                className="form-input" 
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="City, Country"
                            />
                        </div>
                    </div>

                    <div className="form-group full-width mt-4">
                        <label>About Me</label>
                        <textarea 
                            className="form-input textarea" 
                            placeholder="Tell us about yourself and your travel interests..."
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            rows={4}
                        ></textarea>
                    </div>
                </section>

                {/* Travel Preferences Section */}
                <section className="settings-form-section mt-6">
                    <h2>Travel Preferences</h2>
                    
                    <div className="preferences-list">
                        <div 
                            className={`preference-card ${ecoFriendly ? 'active' : ''}`}
                            onClick={() => setEcoFriendly(!ecoFriendly)}
                        >
                            <div className="pref-checkbox">
                                {ecoFriendly ? <CheckSquare size={22} className="text-purple-500" /> : <Square size={22} className="text-gray-400" />}
                            </div>
                            <div className="pref-content">
                                <h3>Prefer Eco-Friendly Options</h3>
                                <p>Prioritize sustainable travel recommendations</p>
                            </div>
                        </div>

                        <div 
                            className={`preference-card ${emailAlerts ? 'active' : ''}`}
                            onClick={() => setEmailAlerts(!emailAlerts)}
                        >
                            <div className="pref-checkbox">
                                {emailAlerts ? <CheckSquare size={22} className="text-purple-500" /> : <Square size={22} className="text-gray-400" />}
                            </div>
                            <div className="pref-content">
                                <h3>Email Notifications</h3>
                                <p>Receive trip updates and recommendations</p>
                            </div>
                        </div>

                        <div 
                            className={`preference-card ${marketing ? 'active' : ''}`}
                            onClick={() => setMarketing(!marketing)}
                        >
                            <div className="pref-checkbox">
                                {marketing ? <CheckSquare size={22} className="text-purple-500" /> : <Square size={22} className="text-gray-400" />}
                            </div>
                            <div className="pref-content">
                                <h3>Marketing Communications</h3>
                                <p>Get travel deals and special offers</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Floating Actions */}
            <div className="floating-actions">
                <button className="btn-save-changes" onClick={handleSaveChanges}>
                    <Save size={18} /> Save Changes
                </button>

            </div>
        </div>
    );
}

export default AccountSettings;
