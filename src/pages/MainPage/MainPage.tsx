import Day from '@/components/Day/Day'
import SubHeader from '@/components/SubHeader/SubHeader'
import { getMonthIndex } from '@/store/calendar/calendarSlice'
import { useAppSelector } from '@/store/hooks'
import getMonth from '@/utills/getMonth'
import { Box, Container, Grid } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'

function MainPage() {
  const month = getMonth(useAppSelector(getMonthIndex))

  return (
    <>
      <SubHeader />
      <Box component="main" sx={{ flexGrow: 1, display: 'flex' }}>
        <Container sx={{ mb: 4, flexGrow: 1, display: 'grid' }} maxWidth={false}>
          <Grid
            sx={{
              display: 'grid',
              gridAutoFlow: 'row',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gridAutoRows: 'repeat(5, 1fr)',
            }}>
            {month.map((row, weekIndex) => (
              <Fragment key={weekIndex}>
                {row.map((day, dayIndex) => (
                  <Day day={day} key={dayIndex} />
                ))}
              </Fragment>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default MainPage
