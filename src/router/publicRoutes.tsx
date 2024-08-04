import { Navigate } from 'react-router-dom'
import { LOG_IN, SIGN_UP } from '@/constants/routes'
import UnauthorizedLayout from '@/Layounts/Unauthorized/UnauthorizedLayout'
import SignInPage from '@/pages/SignIn/SignInPage'
import SignUpPage from '@/pages/SignUp/SignUpPage'

const publicRoutes = [
  {
    element: <UnauthorizedLayout />,
    children: [
      { path: `/${LOG_IN}`, element: <SignInPage /> },
      { path: `/${SIGN_UP}`, element: <SignUpPage /> },
      { path: '*', element: <Navigate to={`/${LOG_IN}`} replace /> },
    ],
  },
]

export default publicRoutes
