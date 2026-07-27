

import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost' 
import ContactUs from '../pages/ContactUs'
import EngineerSignUp from '../pages/ApplyForJobs'
import BusinessSignUp from '../pages/HireAnEngineer'
import Marketplace from '../pages/Marketplace'
import Dashboard from '../pages/Dashboard'

const umarRoutes = [
  { path: '/contact', element: <ContactUs /> },
  { path: '/blogs', element: <Blog /> },
  { path: '/blogs/:slug', element: <BlogPost /> },
  { path: '/applyforjobs', element: <EngineerSignUp/> },
  { path: '/hireanengineer', element: <BusinessSignUp /> },
  { path: '/marketplace', element: <Marketplace /> },
  { path: '/dashboard', element: <Dashboard /> },

]

export default umarRoutes