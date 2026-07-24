import About from '../pages/AboutUs'
import LoginPage from '../pages/Login'
import Privacy from '../pages/privacypolicy'

import TermsConditions from '../pages/Terms&cnditions'

const amnaRoutes = [
  { path: '/about-us', element: <About /> },
  {path: '/login', element:<LoginPage/>},
   {path: '/privacy', element: <Privacy/>},
    {path: '/legal', element: <TermsConditions/>},

]

export default amnaRoutes