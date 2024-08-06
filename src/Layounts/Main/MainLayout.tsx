import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from '@/components/Header/Header'

function MainLayout() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.grey[100],
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: 768,
        overflow: 'auto',
      }}>
      <Header />
      <Outlet />
    </Box>
  )
}

export default MainLayout
