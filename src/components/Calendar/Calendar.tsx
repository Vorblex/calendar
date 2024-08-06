import { getSelectedEvent, setShowModalToggle, showModal } from '@/store/calendar/calendarSlice'
import { useAppSelector } from '@/store/hooks'
import { Box, Container } from '@mui/material'
import { useDispatch } from 'react-redux'
import Month from '@/components/Month/Month'
import Dialog from '@/components/Dialog/Dialog'

function Calendar() {
  const isShowModal = useAppSelector(showModal)
  const selectedEvent = useAppSelector(getSelectedEvent)
  const dispatch = useDispatch()
  const handleClose = () => dispatch(setShowModalToggle())

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, display: 'flex' }}>
        <Container sx={{ mb: 4, flexGrow: 1, display: 'grid' }} maxWidth="xl">
          <Month />
        </Container>
      </Box>

      {isShowModal && (
        <Dialog selectedEvent={selectedEvent} onClose={handleClose} isShowModal={isShowModal} />
      )}
    </>
  )
}

export default Calendar
