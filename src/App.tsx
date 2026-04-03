import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import VesselManagement from './pages/VesselManagement';
import Security from './pages/Security';
import Personnel from './pages/Personnel';
import Technical from './pages/Technical';
import Analytics from './pages/Analytics';
import Archive from './pages/Archive';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ?
            <Navigate to="/dashboard" /> :
            <Login onLogin={() => setIsAuthenticated(true)} />
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ?
            <DashboardLayout /> :
            <Navigate to="/login" />
          }
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="vessels" element={<VesselManagement />} />
          <Route path="security" element={<Security />} />
          <Route path="personnel" element={<Personnel />} />
          <Route path="technical" element={<Technical />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="archive" element={<Archive />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
