
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EmployerDashboard from "./pages/EmployerDashboard";
import EmployerJobListings from "./pages/EmployerJobListings";
import EmployerJobView from "./pages/EmployerJobView";
import EmployerJobEdit from "./pages/EmployerJobEdit";
import EmployerApplications from "./pages/EmployerApplications";
import SeekerDashboard from "./pages/SeekerDashboard";
import JobListings from "./pages/JobListings";
import MyApplications from "./pages/MyApplications";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode, requiredRole?: string }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  const { user, isAuthenticated } = useAuth();
  
  return (
    <Routes>
      <Route path="/" element={
        isAuthenticated ? (
          user?.role === 'employer' ? 
            <Navigate to="/employer/dashboard" replace /> : 
            <Navigate to="/seeker/dashboard" replace />
        ) : (
          <Landing />
        )
      } />
      
      <Route path="/signin" element={
        isAuthenticated ? (
          user?.role === 'employer' ? 
            <Navigate to="/employer/dashboard" replace /> : 
            <Navigate to="/seeker/dashboard" replace />
        ) : (
          <SignIn />
        )
      } />
      
      <Route path="/signup" element={
        isAuthenticated ? (
          user?.role === 'employer' ? 
            <Navigate to="/employer/dashboard" replace /> : 
            <Navigate to="/seeker/dashboard" replace />
        ) : (
          <SignUp />
        )
      } />
      
      <Route path="/employer/dashboard" element={
        <ProtectedRoute requiredRole="employer">
          <Layout><EmployerDashboard /></Layout>
        </ProtectedRoute>
      } />
      
      <Route path="/employer/post-job" element={
        <ProtectedRoute requiredRole="employer">
          <Layout><PostJob /></Layout>
        </ProtectedRoute>
      } />
      
      <Route path="/employer/jobs" element={
        <ProtectedRoute requiredRole="employer">
          <Layout><EmployerJobListings /></Layout>
        </ProtectedRoute>
      } />
      
      <Route path="/employer/jobs/:id" element={
        <ProtectedRoute requiredRole="employer">
          <Layout><EmployerJobView /></Layout>
        </ProtectedRoute>
      } />
      
      <Route path="/employer/jobs/:id/edit" element={
        <ProtectedRoute requiredRole="employer">
          <Layout><EmployerJobEdit /></Layout>
        </ProtectedRoute>
      } />
      
      <Route path="/employer/applications" element={
        <ProtectedRoute requiredRole="employer">
          <Layout><EmployerApplications /></Layout>
        </ProtectedRoute>
      } />
      
      <Route path="/seeker/dashboard" element={
        <ProtectedRoute requiredRole="seeker">
          <Layout><SeekerDashboard /></Layout>
        </ProtectedRoute>
      } />
      
      <Route path="/jobs" element={
        <ProtectedRoute>
          <Layout><JobListings /></Layout>
        </ProtectedRoute>
      } />
      
      <Route path="/jobs/:id" element={
        <ProtectedRoute>
          <Layout><JobDetails /></Layout>
        </ProtectedRoute>
      } />
      
      <Route path="/my-applications" element={
        <ProtectedRoute requiredRole="seeker">
          <Layout><MyApplications /></Layout>
        </ProtectedRoute>
      } />
      
      <Route path="*" element={<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
