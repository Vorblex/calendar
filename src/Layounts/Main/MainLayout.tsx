import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from '@/components/Header/Header'

function MainLayout() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          overflow: 'auto',
        }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, display: 'flex' }}>
          <Container sx={{ mt: 4, mb: 4, flexGrow: 1, display: 'grid' }} maxWidth={false}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default MainLayout
