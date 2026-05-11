import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import PlanTrip from './pages/PlanTrip';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import PrivacySecurity from './pages/PrivacySecurity';
import Appearance from './pages/Appearance';
import ContactSupport from './pages/ContactSupport';
import AccountSettings from './pages/AccountSettings';
import ExploreTrips from './pages/ExploreTrips';
import EcoInsights from './pages/EcoInsights';
import Weather from './pages/Weather';
import { TripProvider } from './context/TripContext';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import Layout from './components/Layout';
import AuthGuard from './components/AuthGuard';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <TripProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/plan" element={<PlanTrip />} />
              <Route path="/explore" element={<ExploreTrips />} />
              <Route path="/eco" element={<EcoInsights />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
              <Route path="/notifications" element={<AuthGuard><Notifications /></AuthGuard>} />
              <Route path="/privacy-security" element={<AuthGuard><PrivacySecurity /></AuthGuard>} />
              <Route path="/appearance" element={<Appearance />} />
              <Route path="/contact-support" element={<ContactSupport />} />
              <Route path="/account-settings" element={<AuthGuard><AccountSettings /></AuthGuard>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </TripProvider>
    </AuthProvider>
  );
}

export default App;
