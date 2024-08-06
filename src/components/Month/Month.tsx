import { Grid } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import { getMonthIndex } from '@/store/calendar/calendarSlice'
import { useAppSelector } from '@/store/hooks'
import { getMonthData } from '@/utills/date'
import { lazy, Suspense } from 'react'
import MonthSkeleton from '@/components/MonthSkeleton/MonthSkeleton'
const Day = lazy(() => import('@/components/Day/Day'))

function Month() {
  const month = getMonthData(useAppSelector(getMonthIndex))

  return (
    <Grid
      sx={{
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridAutoRows: 'repeat(5, 1fr)',
      }}>
      <Suspense fallback={<MonthSkeleton />}>
        {month.map((row, weekIndex) => (
          <Fragment key={weekIndex}>
            {row.map((day, dayIndex) => (
              <Day day={day} weekIndex={weekIndex} key={dayIndex} />
            ))}
          </Fragment>
        ))}
      </Suspense>
    </Grid>
  )
}

export default Month
