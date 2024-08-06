import { TEvent } from '@/types'
import { Box } from '@mui/material'
import Event from '@/components/Event/Event'

type TProps = {
  events: TEvent[]
  onSelectedEvent(event: TEvent): void
}

function EventsList({ events, onSelectedEvent }: TProps) {
  return (
    <>
      {events?.map((event) => (
        <Box
          sx={{ cursor: 'pointer', mb: 0.3 }}
          onClick={() => onSelectedEvent(event)}
          key={event.id}>
          <Event event={event} />
        </Box>
      ))}
    </>
  )
}

export default EventsList
