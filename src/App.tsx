import { RouterProvider } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks'
import createRouter from '@/router'
import { isLoggedIn } from '@/store/user/userSlice'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

function App() {
  const loggedIn = useAppSelector(isLoggedIn)
  const router = createRouter(loggedIn)

  const defaultTheme = createTheme()

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
