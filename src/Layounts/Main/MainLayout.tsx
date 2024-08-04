import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from '@/components/Header/Header'
import SubHeader from '@/components/SubHeader/SubHeader'

function MainLayout() {
  return (
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
      <Outlet />
    </Box>
  )
}

export default MainLayout
