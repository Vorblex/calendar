import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { isLoggedIn, setUserState } from '@/store/user/userSlice'

function Header() {
  const loggedIn = useAppSelector(isLoggedIn)
  const dispatch = useAppDispatch()

  const logOut = () => {
    if (loggedIn) {
      return dispatch(setUserState({ email: '', name: '' }))
    }
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Calendar
        </Typography>
        <Button onClick={logOut} variant="contained" color="info">
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
