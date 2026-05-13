import React, { useState } from 'react';
import {
    Sparkles, MapPin, DollarSign, Users, Calendar, Utensils,
    Building, Truck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTripContext } from '../context/TripContext';
import './PlanTrip.css';

function PlanTrip() {

    const { user } = useAuth();
    const { saveTrip } = useTripContext();
    const navigate = useNavigate();
    const [startingLocation, setStartingLocation] = useState('');
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        // Check if the protocol is secure (HTTPS or localhost)
        if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            alert("Geolocation requires a secure connection (HTTPS or localhost). Please check your connection.");
            return;
        }

        setIsLoadingLocation(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setStartingLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
                setIsLoadingLocation(false);
            },
            (error) => {
                console.error("Error fetching location:", error);
                let message = "Unable to retrieve your location";
                
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        message = "Location access denied. Please enable it in your browser settings.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        message = "Location information is unavailable.";
                        break;
                    case error.TIMEOUT:
                        message = "The request to get user location timed out.";
                        break;
                }
                
                alert(message);
                setIsLoadingLocation(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    };

    const handleSaveTrip = () => {
        saveTrip();
        alert("Trip successfully generated and saved to your Dashboard!");
        navigate('/dashboard');
    };

    return (
        <div className="plan-page">

            {/* Main Header / Title Section */}
            <div className="plan-header">
                <div className="badge-purple">
                    <Sparkles size={14} /> AI-Powered Trip Planning
                </div>
                <h1 className="plan-title">Plan Your Perfect Pakistan Adventure</h1>
                <p className="plan-subtitle">
                    Tell us your preferences and let our AI create a personalized travel plan<br />
                    just for you
                </p>
            </div>

            {/* Main Content Layout */}
            <div className="plan-layout">

                {/* Left Column: Form */}
                <div className="plan-form-card">
                    <div className="form-group-p">
                        <label><MapPin size={16} className="icon-emerald" /> Starting Location</label>
                        <div className="location-input-wrapper">
                            <input
                                type="text"
                                placeholder="Your current location"
                                className="plan-input"
                                value={startingLocation}
                                onChange={(e) => setStartingLocation(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn-current-location"
                                onClick={getCurrentLocation}
                                disabled={isLoadingLocation}
                            >
                                {isLoadingLocation ? "Locating..." : "Use Current Location"}
                            </button>
                        </div>
                    </div>

                    <div className="form-group-p">
                        <label><MapPin size={16} className="icon-emerald" /> Destination</label>
                        <select className="plan-input" defaultValue="Select your destination" style={{ cursor: 'pointer' }}>
                            <option value="Select your destination">Select your destination</option>
                            <option value="Hunza Valley">Hunza Valley</option>
                            <option value="Skardu">Skardu</option>
                            <option value="Naran Kaghan">Naran Kaghan</option>
                            <option value="Swat Valley">Swat Valley</option>
                            <option value="Murree">Murree</option>
                            <option value="Fairy Meadows">Fairy Meadows</option>
                            <option value="Neelum Valley">Neelum Valley</option>
                        </select>
                    </div>

                    <div className="form-group-p">
                        <label><DollarSign size={16} className="icon-emerald" /> Budget (PKR)</label>
                        <input type="text" placeholder="e.g. 50,000" className="plan-input" />
                    </div>

                    <div className="form-group-p">
                        <label><Users size={16} className="icon-emerald" /> Number of Travelers</label>
                        <input type="text" placeholder="e.g. 2" className="plan-input" />
                    </div>

                    <div className="form-group-p">
                        <label><Calendar size={16} className="icon-emerald" /> Trip Duration (Days)</label>
                        <input type="text" placeholder="e.g. 5" className="plan-input" />
                    </div>

                    <div className="form-group-p">
                        <label><Utensils size={16} className="icon-emerald" /> Food Preference</label>
                        <select className="plan-input" defaultValue="Local Cuisine" style={{ cursor: 'pointer' }}>
                            <option value="Local Cuisine">Local Cuisine</option>
                            <option value="International">International</option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Mixed Options">Mixed Options</option>
                        </select>
                    </div>

                    <div className="form-group-p">
                        <label><Building size={16} className="icon-emerald" /> Accommodation Type</label>
                        <select className="plan-input" defaultValue="Hotel" style={{ cursor: 'pointer' }}>
                            <option value="Hotel">Hotel</option>
                            <option value="Resort">Resort</option>
                            <option value="Guest House">Guest House</option>
                            <option value="Camping">Camping</option>
                            <option value="Eco-Lodge">Eco-Lodge</option>
                        </select>
                    </div>

                    <div className="form-group-p">
                        <label><Truck size={16} className="icon-emerald" /> Transport Preference</label>
                        <select className="plan-input" defaultValue="Bus/Van (Most Eco-friendly)" style={{ cursor: 'pointer' }}>
                            <option value="Bus/Van (Most Eco-friendly)">Bus/Van (Most Eco-friendly)</option>
                            <option value="Train (Eco-friendly)">Train (Eco-friendly)</option>
                            <option value="Shared Car">Shared Car</option>
                            <option value="Private Car">Private Car</option>
                            <option value="Flight">Flight</option>
                        </select>
                    </div>

                    <button className="btn-generate" onClick={handleSaveTrip}>
                        <Sparkles size={18} /> Generate Smart Plan <span className="arrow">→</span>
                    </button>
                </div>

                {/* Right Column: AI Assistant & Stats */}
                <div className="plan-right-column">

                    <div className="ai-assistant-card">
                        <div className="ai-assistant-header">
                            <div className="ai-avatar">
                                <Sparkles size={20} color="white" />
                            </div>
                            <div className="ai-header-text">
                                <h3>AI Travel Assistant</h3>
                                <p>Powered by ExploreSmart</p>
                            </div>
                        </div>

                        <div className="ai-chat-bubble bubble-green">
                            <span>👋</span> Hello! I'll help you create the perfect Pakistan travel plan based on your preferences.
                        </div>

                        <div className="ai-chat-bubble bubble-blue">
                            <span>🎯</span> I'll consider weather conditions, budget constraints, and eco-friendly options.
                        </div>

                        <div className="ai-chat-bubble bubble-purple">
                            <span>✨</span> Fill out the form and I'll generate personalized recommendations instantly!
                        </div>
                    </div>

                    <div className="stats-grid-2">
                        <div className="stat-box">
                            <h2 className="text-emerald">10K+</h2>
                            <p>Plans Created</p>
                        </div>
                        <div className="stat-box">
                            <h2 className="text-emerald">98%</h2>
                            <p>Satisfaction</p>
                        </div>
                        <div className="stat-box">
                            <h2 className="text-blue">50+</h2>
                            <p>Destinations</p>
                        </div>
                        <div className="stat-box">
                            <h2 className="text-purple">24/7</h2>
                            <p>AI Support</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default PlanTrip;
