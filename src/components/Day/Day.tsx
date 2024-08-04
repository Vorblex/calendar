import { TDay } from '@/types'
import { Grid, Paper } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getSelectedDay, setDaySelected } from '@/store/calendar/calendarSlice'

type TProps = {
  day: TDay
  weekIndex: number
}

function Day({ day, weekIndex }: TProps) {
  const dispatch = useAppDispatch()

  const handleDaySelect = () => {
    dispatch(setDaySelected(day.toString()))
  }

  const selectedDay = useAppSelector(getSelectedDay)
  const isThisDaySelected = selectedDay === day.toString()

  return (
    <Grid
      onClick={handleDaySelect}
      item
      sx={{
        display: 'flex',
      }}>
      <Paper
        square
        sx={{
          p: 2,
          flexGrow: 1,
          flexDirection: 'column',
          bgcolor: isThisDaySelected ? 'primary.light' : '',
          cursor: 'pointer',
        }}>
        {weekIndex === 0 && <span>{day.format('ddd')}, </span>}
        {day.format('DD')}
      </Paper>
    </Grid>
  )
}

export default Day
