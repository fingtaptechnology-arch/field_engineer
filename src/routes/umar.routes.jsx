

import Blog from '../pages/Blog'
import ContactUs from '../pages/ContactUs'
import EngineerSignUp from '../pages/EngineerSignUp'

const amnaRoutes = [
  { path: '/contact', element: <ContactUs /> },
  { path: '/blogs', element: <Blog /> },
  { path: '/engineer-signup', element: <EngineerSignUp /> },
]

export default amnaRoutes