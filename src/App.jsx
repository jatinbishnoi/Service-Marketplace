import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '/src/components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ServiceDetailPage from './pages/ServiceDetailsPage.jsx';
import ConfirmationPage from '/src/pages/ConfirmationPage.jsx';
import DashboardPage from '/src/pages/DashboardPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import SigninPage from './pages/SigninPage.jsx';
import { BookingProvider } from './context/BookingContext.jsx';

function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="service/:id" element={<ServiceDetailPage />} />
            <Route path="confirmation" element={<ConfirmationPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="signin" element={<SigninPage />} />
          </Route>
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;