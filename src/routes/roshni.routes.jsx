import Home from "../pages/Home"
import HowItWorksBusiness from "../pages/HowItWorksBusiness"
import HowItWorksEngineer from "../pages/HowItWorksEngineer"
import Skills from "../pages/Skills"
import Help from "../pages/Help"
import ManageUsers from "../pages/ManageUsers"
import TimeManagement from "../pages/TimeManagement"

const roshniRoutes = [
  { path: '/', element: <Home /> },
  { path: '/how-it-works-businesses', element: <HowItWorksBusiness /> },
  { path: '/engineer', element: <HowItWorksEngineer /> },
  { path: '/skills', element: <Skills /> },
  { path: '/help', element: <Help /> },
  { path: '/manage-users', element: <ManageUsers /> },
  { path: '/time-management', element: <TimeManagement /> },
]

export default roshniRoutes
