import { TDay, TEvent } from '@/types'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useRef } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import {
  getDayEvents,
  getSelectedDay,
  setDaySelected,
  setSelectedEvent,
  setShowModalToggle,
} from '@/store/calendar/calendarSlice'
import EventsList from '@/components/EventsList/EventsList'

type TProps = {
  day: TDay
  weekIndex: number
}

function Day({ day, weekIndex }: TProps) {
  const dispatch = useAppDispatch()
  const events = useAppSelector((state) => getDayEvents(state, day.valueOf()))
  const isHendledClickOnEvent = useRef(false)
  const selectedDay = useAppSelector(getSelectedDay)
  const isCurrentDaySelected = selectedDay === day.valueOf()

  const handleDaySelect = () => {
    if (!isHendledClickOnEvent.current) {
      dispatch(setSelectedEvent(null))
    }
    dispatch(setDaySelected(day.valueOf()))
    dispatch(setShowModalToggle())
    isHendledClickOnEvent.current = false
  }

  const handleEventClick = (event: TEvent | null) => {
    dispatch(setSelectedEvent(event || null))
    isHendledClickOnEvent.current = true
  }

  return (
    <Grid onClick={handleDaySelect} item sx={{ display: 'flex' }}>
      <Paper
        square
        sx={{
          p: 1,
          flexGrow: 1,
          flexDirection: 'column',
          bgcolor: isCurrentDaySelected ? 'primary.light' : '',
        }}>
        <Typography component={'div'} sx={{ mb: 0.2 }} variant="body2" color="inherit">
          {weekIndex === 0 && (
            <Typography component={'span'} variant="inherit">
              {day.format('ddd')},{' '}
            </Typography>
          )}
          {day.format('DD')}
        </Typography>
        <EventsList events={events} onSelectedEvent={handleEventClick} />
      </Paper>
    </Grid>
  )
}

export default Day
