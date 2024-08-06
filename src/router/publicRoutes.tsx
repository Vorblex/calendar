import { Navigate } from 'react-router-dom'
import { LOG_IN, SIGN_UP } from '@/constants/routes'
import UnauthorizedLayout from '@/Layounts/Unauthorized/UnauthorizedLayout'
import SignInPage from '@/pages/SignIn/SignInPage'
import { lazy, Suspense } from 'react'
import { LinearProgress } from '@mui/material'
const SignUpPage = lazy(() => import('@/pages/SignUp/SignUpPage'))

const publicRoutes = [
  {
    element: <UnauthorizedLayout />,
    children: [
      { path: `/${LOG_IN}`, element: <SignInPage /> },
      {
        path: `/${SIGN_UP}`,
        element: (
          <Suspense fallback={<LinearProgress sx={{ width: 300 }} />}>
            <SignUpPage />
          </Suspense>
        ),
      },
      { path: '*', element: <Navigate to={`/${LOG_IN}`} replace /> },
    ],
  },
]

export default publicRoutes
