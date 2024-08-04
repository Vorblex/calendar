import { createBrowserRouter } from 'react-router-dom'
import privateRoutes from '@/router/privateRoutes'
import publicRoutes from '@/router/publicRoutes'

const createRouter = (isLoggedIn: boolean) => {
  const routes = isLoggedIn ? privateRoutes : publicRoutes
  return createBrowserRouter(routes)
}

export default createRouter
