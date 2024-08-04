import dayjs from 'dayjs'
import { Box, Button, Container, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getMonthIndex, setMonthIndex } from '@/store/calendar/calendarSlice'

function SubHeader() {
  const monthIndex = useAppSelector(getMonthIndex)
  const dispatch = useAppDispatch()

  const handleToday = () => {
    dispatch(setMonthIndex(dayjs().month()))
  }

  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: 2,
        }}>
        <Button
          onClick={() => dispatch(setMonthIndex(monthIndex - 1))}
          variant="outlined"
          size="small">
          &lt;
        </Button>
        <Typography sx={{ px: 1 }} component="span" variant="subtitle1" color="inherit" noWrap>
          {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
        </Typography>
        <Button
          onClick={() => dispatch(setMonthIndex(monthIndex + 1))}
          variant="outlined"
          size="small">
          &gt;
        </Button>
        <Button onClick={handleToday} sx={{ ml: 1 }} variant="outlined" size="small">
          Today
        </Button>
      </Box>
    </Container>
  )
}

export default SubHeader
