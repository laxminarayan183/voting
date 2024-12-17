import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import VoterLogin from "../pages/VoterLogin";
import VoterRegister from "../pages/VoterRegister";
import VoterPanel from "../pages/VotePanel";
import AdminLogin from "../pages/AdminLogin";
import TotalVotes from "../pages/TotalVotes";
import AdminRegister from "../pages/AdminRegister";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../pages/AdminDashboard";
import CandidateRegister from "../pages/CandidateRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <VoterLogin />,
  },
  {
    path: "/register",
    element: <VoterRegister />,
  },
  {
    path: "/voterlist",
    element: (
      <PrivateRoute>
        <VoterPanel />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin-register",
    element: <AdminRegister />,
  },
  {
    path: "/candidate-register",
    element: <CandidateRegister />,
  },
  {
    path: "/admin-dashboard",
    element: (
      <AdminRoute>
        <AdminDashboard />
      </AdminRoute>
    ),
  },
  {
    path: "/total",
    element: (
      <AdminRoute>
        <TotalVotes />
      </AdminRoute>
    ),
  },
]);

export default router;
