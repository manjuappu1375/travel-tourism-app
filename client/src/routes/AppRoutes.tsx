import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';

// User Pages
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import TourDetails from '../pages/TourDetails';
import BookingForm from '../pages/BookingForm';
import Wishlist from '../pages/Wishlist';
import Profile from '../pages/Profile';
import SearchResults from '../pages/SearchResults';
import SearchPage from '../pages/SearchPage';

// Auth Pages
import Login from '../pages/Login';

// Admin Pages
import AdminDashboard from '../pages/Admin/AdminDashboard';
import TourStats from '../pages/Admin/TourStats';
import BookingStats from '../pages/Admin/BookingStats';
import ReviewsModeration from '../pages/Admin/ReviewsModeration';
import SupportTickets from '../pages/Admin/SupportTickets';

// Shared
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/tour/:id" element={<TourDetails />} />
    <Route path="/book/:id" element={<BookingForm />} />  {/* 👈 updated */}
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/search/results" element={<SearchResults />} />

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Login />} />

    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="tour-stats" element={<TourStats />} />
      <Route path="booking-stats" element={<BookingStats />} />
      <Route path="reviews" element={<ReviewsModeration />} />
      <Route path="support" element={<SupportTickets />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
