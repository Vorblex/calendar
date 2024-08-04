import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'

function UnauthorizedLayout() {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Outlet />
        </Box>
      </Container>
    </>
  )
}

export default UnauthorizedLayout
