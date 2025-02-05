import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/SPE/HomePage/HomePage";
import AboutUs from "./components/SPE/AboutUs/AboutUs";
import UpcomingEvents from "./components/SPE/UpcomingEvents/UpcomingEvents";
import Contact from "./components/SPE/ContactUs/Contact";
import SPENavbar from "./components/SPE/HomePage/spenav";
import Membership from "./components/SPE/Membership/Membership";
import TeamMembers from "./components/SPE/TeamMembers/TeamMembers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SPENavbar />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/UpcomingEvents", element: <UpcomingEvents /> },
      { path: "/ContactUs", element: <Contact /> },
      { path: "/Member", element: <Membership /> },
      { path: "/TeamMembers", element: <TeamMembers /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
