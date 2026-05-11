import React, { useState } from 'react';
import {
    ArrowLeft, Mail, Send, Phone, MessageSquare, HelpCircle, ChevronUp, ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import './ContactSupport.css';

function ContactSupport() {
    const navigate = useNavigate();

    const { user } = useAuth();
    
    // FAQ State
    const [openFaqIndex, setOpenFaqIndex] = useState(0); // First one open by default

    const faqs = [
        {
            question: "How do I plan a trip using the AI planner?",
            answer: "Navigate to the \"Plan Trip\" page, fill in your destination, budget, number of travelers, and preferences. Our AI will generate personalized recommendations for you."
        },
        {
            question: "What makes a trip eco-friendly?",
            answer: "Eco-friendly trips prioritize sustainable transportation, green accommodations, and activities that minimize environmental impact. Check the Eco Insights page for detailed metrics."
        },
        {
            question: "How do I save trips to my dashboard?",
            answer: "When viewing trip results, click the \"Save Trip\" button on any package. You can access all saved trips from your dashboard."
        },
        {
            question: "Can I change my travel preferences later?",
            answer: "Yes! Go to Account Settings and update your eco-friendly preferences or any other travel settings anytime."
        },
        {
            question: "How accurate is the weather information?",
            answer: "We use real-time data sources to provide the most accurate weather forecasts and safety alerts for destinations across Pakistan."
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? -1 : index);
    };

    return (
        <div className="contact-support-page">

            <main className="contact-main">
                <div className="contact-container">

                    {/* Header Section */}
                    <div className="contact-header-wrapper">
                        <div className="header-top">
                            <button className="back-btn" onClick={() => navigate('/')}>
                                <ArrowLeft size={16} />
                                <span>Back to Home</span>
                            </button>
                        </div>

                        <div className="header-content-wrapper">
                            <div className="header-titles">
                                <h1>Contact Support</h1>
                                <p>We're here to help with any questions</p>
                            </div>
                            <div className="header-icon-large teal-mail">
                                <Mail size={32} color="white" />
                            </div>
                        </div>
                    </div>

                    {/* Main Layout Grid */}
                    <div className="contact-split-layout">
                        
                        {/* Left Column - Contact Form */}
                        <div className="contact-form-section">
                            <div className="contact-card">
                                <h2>Send us a message</h2>
                                
                                <form className="support-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-row">
                                        <div className="form-group-col">
                                            <label>Your Name</label>
                                            <input type="text" placeholder="John Doe" />
                                        </div>
                                        <div className="form-group-col">
                                            <label>Email Address</label>
                                            <input type="email" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="form-group-full">
                                        <label>Subject</label>
                                        <input type="text" placeholder="How can we help you?" />
                                    </div>

                                    <div className="form-group-full">
                                        <label>Message</label>
                                        <textarea placeholder="Tell us more about your inquiry..." rows="6"></textarea>
                                    </div>

                                    <button type="submit" className="btn-send-message">
                                        <Send size={18} />
                                        <span>Send Message</span>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right Column - Info Cards */}
                        <div className="contact-info-section">
                            {/* Card 1: Reach Us */}
                            <div className="contact-card min-padding">
                                <h3>Other Ways to Reach Us</h3>
                                
                                <div className="reach-method">
                                    <div className="reach-icon bg-blue-100">
                                        <Mail size={18} color="#2563eb" />
                                    </div>
                                    <div className="reach-text">
                                        <h4>Email</h4>
                                        <p>support@exploresmart.com</p>
                                    </div>
                                </div>

                                <div className="reach-method">
                                    <div className="reach-icon bg-green-100">
                                        <Phone size={18} color="#16a34a" />
                                    </div>
                                    <div className="reach-text">
                                        <h4>Phone</h4>
                                        <p>+92 300 1234567</p>
                                    </div>
                                </div>

                                <div className="reach-method">
                                    <div className="reach-icon bg-purple-100">
                                        <MessageSquare size={18} color="#9333ea" />
                                    </div>
                                    <div className="reach-text">
                                        <h4>Live Chat</h4>
                                        <p>Available 24/7</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Quick Help Bot */}

                        </div>

                    </div>

                    {/* FAQ Section */}
                    <div className="contact-card faq-section">
                        <div className="faq-header">
                            <div className="faq-icon-wrapper bg-yellow-100">
                                <HelpCircle size={20} color="#d97706" />
                            </div>
                            <h2>Frequently Asked Questions</h2>
                        </div>

                        <div className="faq-list">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <div 
                                        key={index} 
                                        className={`faq-item ${isOpen ? 'open' : ''}`}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <div className="faq-question">
                                            <h3>{faq.question}</h3>
                                            <div className="faq-toggle-icon">
                                                {isOpen ? 
                                                    <span className="triangle-up"></span> : 
                                                    <span className="triangle-down"></span>
                                                }
                                            </div>
                                        </div>
                                        {isOpen && (
                                            <div className="faq-answer">
                                                <div className="answer-line"></div>
                                                <p>{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </main>
            {/* Floating Chat Widget */}

        </div>
    );
}

export default ContactSupport;
