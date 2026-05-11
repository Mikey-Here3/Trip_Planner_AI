import React, { useState } from 'react';
import {
    ArrowLeft, Palette, Sun, Moon, Monitor, CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import './Appearance.css';

function Appearance() {
    const navigate = useNavigate();

    const { user } = useAuth();
    const [selectedTheme, setSelectedTheme] = useState('light'); // 'light', 'dark', 'auto'
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSave = () => {
        // Here you would typically save to localStorage or backend
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="appearance-page">

            <main className="appearance-main">
                <div className="appearance-container">

                    {/* Header Section */}
                    <div className="appearance-header-wrapper">
                        <div className="header-top">
                            <button className="back-btn" onClick={() => navigate('/')}>
                                <ArrowLeft size={16} />
                                <span>Back to Home</span>
                            </button>
                        </div>

                        <div className="header-content-wrapper">
                            <div className="header-titles">
                                <h1>Appearance</h1>
                                <p>Customize how ExploreSmart looks for you</p>
                            </div>
                            <div className="header-icon-large purple-palette">
                                <Palette size={32} color="white" />
                            </div>
                        </div>
                    </div>

                    {/* Theme Card */}
                    <section className="appearance-card">
                        <div className="appearance-card-header">
                            <h2>Theme</h2>
                        </div>

                        <div className="appearance-card-body theme-options">
                            {/* Light Mode */}
                            <div 
                                className={`theme-option ${selectedTheme === 'light' ? 'selected' : ''}`}
                                onClick={() => setSelectedTheme('light')}
                            >
                                <div className="theme-icon-wrapper light-icon">
                                    <Sun size={24} />
                                </div>
                                <h3>Light Mode</h3>
                                <p>Clean and bright interface</p>
                            </div>

                            {/* Dark Mode */}
                            <div 
                                className={`theme-option ${selectedTheme === 'dark' ? 'selected' : ''}`}
                                onClick={() => setSelectedTheme('dark')}
                            >
                                <div className="theme-icon-wrapper dark-icon">
                                    <Moon size={24} />
                                </div>
                                <h3>Dark Mode</h3>
                                <p>Easy on the eyes at night</p>
                            </div>

                            {/* Auto Mode */}
                            <div 
                                className={`theme-option ${selectedTheme === 'auto' ? 'selected' : ''}`}
                                onClick={() => setSelectedTheme('auto')}
                            >
                                <div className="theme-icon-wrapper auto-icon">
                                    <Monitor size={24} />
                                </div>
                                <h3>Auto</h3>
                                <p>Matches system preference</p>
                            </div>
                        </div>
                    </section>
                    
                    <div className="save-btn-container">
                        <button className="btn-save-preferences" onClick={handleSave}>
                            Save Preferences
                        </button>
                    </div>

                </div>
            </main>

            {/* Success Notification */}
            {showSuccess && (
                <div className="success-toast">
                    <CheckCircle size={20} color="#10b981" />
                    <span>Settings updated successfully!</span>
                </div>
            )}

        </div>
    );
}

export default Appearance;
