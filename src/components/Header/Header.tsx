import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getIsLoggedIn, removeUserState } from '@/store/user/userSlice'

function Header() {
  const isLoggedIn = useAppSelector(getIsLoggedIn)
  const dispatch = useAppDispatch()
  const userName = useAppSelector((state) => state.user.name)

  const logOut = () => {
    if (isLoggedIn) {
      return dispatch(removeUserState())
    }
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Hello {userName}
        </Typography>
        <Button onClick={logOut} variant="contained" color="info">
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
