import { Fragment } from 'react/jsx-runtime'
import { Grid, Skeleton } from '@mui/material'

const month = new Array(7).fill([new Array(5).fill(null)])
function MonthSkeleton() {
  return month.map((row, weekIndex) => (
    <Fragment key={weekIndex}>
      {row.map((_: any, dayIndex: number) => (
        <Grid key={dayIndex} item sx={{ display: 'flex' }}>
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: 'grey.200', transform: 'none', flexGrow: 1, height: 'auto', m: 0.1 }}
          />
        </Grid>
      ))}
    </Fragment>
  ))
}

export default MonthSkeleton
