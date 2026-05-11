import React from 'react';
import { 
    Mountain, Home as HomeIcon, Map, Compass, Leaf, CloudSun, User, Sparkles,
    ArrowRight, Users, ShieldCheck, MessageCircle, DollarSign,
    Star, Menu, X 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import './Home.css';

function Home() {
    const { user } = useAuth();

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <header className="new-hero-section">
                <div className="hero-content">

                    <h1 className="hero-headline">
                        Smart, Safe & Sustainable<br />
                        <span className="text-highlight">Travel Planning</span><br />
                        for Pakistan
                    </h1>

                    <p className="hero-subheadline">
                        Discover Pakistan's hidden gems with AI-powered recommendations, eco-<br />
                        friendly options, and real-time travel insights.
                    </p>

                    <div className="hero-cta-group">
                        <Link to="/plan" className="btn-cyan" style={{ textDecoration: 'none' }}>
                            Plan Your Trip <ArrowRight size={16} />
                        </Link>
                        <Link to="/explore" className="btn-glass" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Explore Trips
                        </Link>
                    </div>

                    <div className="trust-indicators">
                        <div className="trust-item">
                            <Users size={14} /> 10,000+ Travelers
                        </div>
                        <div className="trust-item">
                            <ShieldCheck size={14} /> Verified Packages
                        </div>
                        <div className="trust-item">
                            <Leaf size={14} /> Eco Certified
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="features-container">
                <div className="section-header">
                    <h2>Why Choose ExploreSmart?</h2>
                    <p>Experience the future of travel planning with cutting-edge AI technology<br />and sustainable practices.</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card-new">
                        <div className="feature-icon-box bg-purple">
                            <Sparkles size={20} color="white" />
                        </div>
                        <h3>AI Trip Planner</h3>
                        <p>Get personalized travel plans powered by AI, tailored to your preferences and budget.</p>
                    </div>

                    <div className="feature-card-new">
                        <div className="feature-icon-box bg-green">
                            <DollarSign size={20} color="white" />
                        </div>
                        <h3>Package Comparison</h3>
                        <p>Compare multiple travel packages side-by-side to find the best deal for your journey.</p>
                    </div>

                    <div className="feature-card-new">
                        <div className="feature-icon-box bg-blue">
                            <CloudSun size={20} color="white" />
                        </div>
                        <h3>Weather Awareness</h3>
                        <p>Real-time weather updates and safety alerts to help you plan the perfect trip.</p>
                    </div>

                    <div className="feature-card-new">
                        <div className="feature-icon-box bg-green-dark">
                            <Leaf size={20} color="white" />
                        </div>
                        <h3>Eco-Friendly Score</h3>
                        <p>Make sustainable choices with our environmental impact ratings for every trip.</p>
                    </div>
                </div>
            </section>

            {/* Destinations Section */}
            <section className="destinations-section">
                <div className="section-header">
                    <h2>Explore Pakistan's Beauty</h2>
                    <p>From majestic mountains to historic landmarks</p>
                </div>

                <div className="destinations-grid">
                    <div className="destination-card" style={{ backgroundImage: "url('/assets/hunza_valley.png')" }}>
                        <div className="destination-info">
                            <h3>Hunza Valley</h3>
                            <p>Northern Paradise</p>
                            <div className="dest-meta">
                                <span className="meta-item"><Star size={14} /> 4.9</span>
                                <span className="meta-item">12 Packages</span>
                            </div>
                        </div>
                    </div>

                    <div className="destination-card" style={{ backgroundImage: "url('/assets/attabad_lake.png')" }}>
                        <div className="destination-info">
                            <h3>Skardu</h3>
                            <p>Gateway to Peaks</p>
                            <div className="dest-meta">
                                <span className="meta-item"><Star size={14} /> 4.8</span>
                                <span className="meta-item">8 Packages</span>
                            </div>
                        </div>
                    </div>

                    <div className="destination-card" style={{ backgroundImage: "url('/assets/historic_lahore.png')" }}>
                        <div className="destination-info">
                            <h3>Lahore</h3>
                            <p>Culture & Food</p>
                            <div className="dest-meta">
                                <span className="meta-item"><Star size={14} /> 4.7</span>
                                <span className="meta-item">25 Packages</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Assistant Banner */}
            <section className="ai-banner">
                <div className="ai-banner-content">
                    <div className="ai-badge">
                        <MessageCircle size={14} /> AI POWERED
                    </div>
                    <h2>Have questions about your trip?</h2>
                    <p>Our AI travel assistant is available 24/7 to help you with itinerary changes, local tips, and safety updates.</p>
                    <button className="btn-cyan">Try AI Assistant</button>
                </div>
            </section>
        </div>
    );
}

export default Home;
