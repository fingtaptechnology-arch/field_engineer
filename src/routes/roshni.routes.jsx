import Home from "../pages/Home"
import HowItWorksBusiness from "../pages/HowItWorksBusiness"
import HowItWorksEngineer from "../pages/HowItWorksEngineer"
import Skills from "../pages/Skills"
import Help from "../pages/Help"
import TimeManagement from "../pages/TimeManagement"
import ManageUsers from "../pages/UserManagement"

const roshniRoutes = [
  { path: '/', element: <Home /> },
  { path: '/how-it-works-businesses', element: <HowItWorksBusiness /> },
  { path: '/how-it-works-engineer', element: <HowItWorksEngineer /> },
  { path: '/skills', element: <Skills /> },
  { path: '/help', element: <Help /> },
  { path: '/user-management', element: <ManageUsers /> },
  { path: '/time-management', element: <TimeManagement /> },
]

export default roshniRoutes
