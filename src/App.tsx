import { RouterProvider } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks'
import createRouter from '@/router'
import { getIsLoggedIn } from '@/store/user/userSlice'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/theme/theme'

function App() {
  const isLoggedIn = useAppSelector(getIsLoggedIn)
  const router = createRouter(isLoggedIn)

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
