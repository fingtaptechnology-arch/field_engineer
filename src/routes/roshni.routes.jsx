import Home from "../pages/Home"
import HowItWorksBusiness from "../pages/HowItWorksBusiness"
import HowItWorksEngineer from "../pages/HowItWorksEngineer"
import Skills from "../pages/Skills"
import Help from "../pages/Help"

const roshniRoutes = [
  { path: '/', element: <Home /> },
  { path: '/how-it-works-businesses', element: <HowItWorksBusiness /> },
  { path: '/engineer', element: <HowItWorksEngineer /> },
  { path: '/skills', element: <Skills /> },
  { path: '/help', element: <Help /> },
]

export default roshniRoutes
