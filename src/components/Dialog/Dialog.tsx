import dayjs from 'dayjs'
import { TEvent } from '@/types'
import { useAppSelector } from '@/store/hooks'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Dialog as MUIDialog, Button, DialogContent, TextField, DialogActions } from '@mui/material'
import { addEvent, getSelectedDay, removeEvent, updateEvent } from '@/store/calendar/calendarSlice'

type TProps = {
  isShowModal: boolean
  selectedEvent: TEvent | null
  onClose(): void
}

function Dialog({ isShowModal, selectedEvent, onClose }: TProps) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(selectedEvent?.title || '')
  const [description, setDescription] = useState(selectedEvent?.description || '')
  const [participants, setParticipants] = useState(selectedEvent?.participants || [])

  const selectedDay = useAppSelector(getSelectedDay)
  const day = selectedEvent?.day || selectedDay
  const eventDate = dayjs(day).format('DD MMMM YYYY')

  const handleSubmit = () => {
    const eventData = {
      title,
      description,
      participants,
    }
    if (selectedEvent) {
      dispatch(updateEvent({ eventData }))
    } else {
      dispatch(addEvent({ day: dayjs(selectedDay).valueOf(), eventData }))
    }
    onClose()
  }

  const handleDelete = () => {
    dispatch(removeEvent())
    onClose()
  }

  const handleParticipantsChange = (event: string) => {
    const newParticipants = event.split(',')
    setParticipants(newParticipants)
  }

  return (
    <MUIDialog open={isShowModal} onClose={onClose} maxWidth={'xs'}>
      <DialogContent>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          required
          size="small"
          margin="dense"
          name="title"
          label="Title"
          fullWidth
        />
        <TextField
          value={eventDate}
          size="small"
          margin="dense"
          name="date"
          label="Date"
          fullWidth
          disabled
        />
        <TextField
          value={participants}
          onChange={(e) => handleParticipantsChange(e.target.value)}
          size="small"
          margin="dense"
          name="participants"
          label="Participants"
          fullWidth
          placeholder={'separate participants by ,'}
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          size="small"
          margin="dense"
          name="title"
          label="Description"
          multiline
          minRows={3}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        {selectedEvent && (
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        )}
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{selectedEvent ? 'Update' : 'Save'}</Button>
      </DialogActions>
    </MUIDialog>
  )
}

export default Dialog
