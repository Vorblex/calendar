import { TEvent } from '@/types'
import { Paper, Typography } from '@mui/material'
import Participants from '@/components/Participants/Participants'

type TProps = {
  event: TEvent
}

function Event({ event }: TProps) {
  return (
    <Paper elevation={3}>
      <Typography component={'div'} sx={{ px: 1 }} variant="body2" color="inherit">
        {event.title}
        <Participants participants={event.participants} />
      </Typography>
    </Paper>
  )
}

export default Event
