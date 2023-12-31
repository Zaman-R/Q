import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Dashboard from "../layout/Dashboard";
import AppointmentQueue from "../pages/dashboard/AppointmentQueue";
import AppointmentList from "../pages/dashboard/adminSection/AppointmentList";
import UserProfile from "../pages/dashboard/common/UserProfile";
import Login from "../loginRegister/Login";
import Register from "../loginRegister/Register";
import AskForAppointment from "../pages/home/AskForAppointment";
import AddDoctor from "../pages/home/AddDoctor";
import UpdateDoctor from "../pages/home/UpdateDoctor";
import AppointmentDetails from "../pages/dashboard/adminSection/AppointmentDetails";
import Consultation from "../components/Consultation/Consultation";
import About from "../components/Navbar/About"
import AdminRoutes from "./AdminRoutes";
import SelectDoctor from "../components/SelectDoctor/SelectDoctor";
import DoctorRoutes from "./DoctorRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/consultation",
        element:<AdminRoutes><Consultation /></AdminRoutes> ,
      },
      {
        path: "/consultation/select_doctor",
        element:<AdminRoutes><SelectDoctor /></AdminRoutes> ,
      },
      {
        path: "/consultation/select_doctor/askforappoitment",
        element:<AdminRoutes><AskForAppointment /></AdminRoutes> ,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/updateDoctor",
        element: <UpdateDoctor />,
      },
      {
        path: "/adddoctor",
        element: <AddDoctor />,
      },
      {
        path: "/appointmentQueue",
        element: <AppointmentQueue />,
      },
      {
        path: "/appointmentList",
        element:<DoctorRoutes> <AppointmentList /> </DoctorRoutes> ,
      },
      {
        path: "/appointmentList/appointmentDetails",
        element: <AppointmentDetails />,
      },
      {
        path: "/appointmentList/appointmentDetails/userProfile",
        element: <UserProfile />,
      },
    ],
  }
]);

export default router;