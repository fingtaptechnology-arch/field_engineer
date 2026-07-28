

import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost' 
import ContactUs from '../pages/ContactUs'
import EngineerSignUp from '../pages/ApplyForJobs'
import BusinessSignUp from '../pages/HireAnEngineer'
import Marketplace from '../pages/Marketplace'
import Messages from '../pages/Messages'
import Funds from '../pages/Funds'
import Reporting from '../pages/Reporting'


const umarRoutes = [
  { path: '/contact', element: <ContactUs /> },
  { path: '/blogs', element: <Blog /> },
  { path: '/blogs/:slug', element: <BlogPost /> },
  { path: '/applyforjobs', element: <EngineerSignUp/> },
  { path: '/hireanengineer', element: <BusinessSignUp /> },
  { path: '/marketplace', element: <Marketplace /> },
  { path: '/messages', element: <Messages /> },
  { path: '/funds', element: <Funds /> },
  { path: '/reporting', element: <Reporting /> },
  

]

export default umarRoutes