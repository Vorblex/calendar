import Day from '@/components/Day/Day'
import getMonth from '@/utills/getMonth'
import { Grid } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'

function MainPage() {
  const month = getMonth()

  return (
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
  )
}

export default MainPage
