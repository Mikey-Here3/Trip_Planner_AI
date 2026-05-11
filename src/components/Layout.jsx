import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ProfileSidebar from './ProfileSidebar';
import Footer from './Footer';
import AIChatbot from './AIChatbot';

const Layout = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div className="app-layout">
            <Navbar onProfileClick={() => setIsProfileOpen(true)} />
            <ProfileSidebar 
                isOpen={isProfileOpen} 
                onClose={() => setIsProfileOpen(false)} 
            />
            <main className="app-main-content">
                <Outlet />
            </main>
            <Footer />
            <AIChatbot />
        </div>
    );
};

export default Layout;
