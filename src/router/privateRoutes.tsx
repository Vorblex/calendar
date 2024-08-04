import { Navigate } from 'react-router-dom'
import MainLayout from '@/Layounts/Main/MainLayout'
import MainPage from '@/pages/MainPage/MainPage'

const privateRoutes = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]

export default privateRoutes
