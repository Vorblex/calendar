import { TEvent } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TState = {
  monthIndex: number
  selectedDay: number | null
  showModal: boolean
  selectedEvent: TEvent | null
  events: Record<number, Array<TEvent>>
}

const initialState: TState = {
  monthIndex: 0,
  selectedDay: null,
  showModal: false,
  events: {},
  selectedEvent: null,
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setMonthIndex: (state, action: PayloadAction<number>) => {
      state.monthIndex = action.payload
    },
    setDaySelected: (state, action: PayloadAction<number>) => {
      state.selectedDay = action.payload
    },
    setShowModalToggle: (state) => {
      state.showModal = !state.showModal
    },
    setSelectedEvent: (state, action: PayloadAction<TEvent | null>) => {
      state.selectedEvent = action.payload
    },
    addEvent: (state, action: PayloadAction<{ day: number; eventData: TEvent }>) => {
      const day = action.payload.day

      if (!state.events[day]) {
        state.events[day] = []
      }

      state.events[day] = [
        ...state.events[day],
        { ...action.payload.eventData, id: Date.now(), day },
      ]
    },
    updateEvent: (state, action: PayloadAction<{ eventData: TEvent }>) => {
      const day = state.selectedDay
      const eventId = state.selectedEvent?.id
      if (day && eventId) {
        const updatedEvents = state.events[day].map((event) => {
          if (event.id === eventId) {
            return { ...event, ...action.payload.eventData }
          }
          return event
        })

        state.events[day] = updatedEvents
      }
    },
    removeEvent: (state) => {
      const day = state.selectedDay
      const eventId = state.selectedEvent?.id
      if (day && eventId) {
        state.events[day] = state.events[day].filter((event) => event.id !== eventId)
      }
    },
  },
  selectors: {
    showModal: (state) => state.showModal,
    getMonthIndex: (state) => state.monthIndex,
    getSelectedDay: (state) => state.selectedDay,
    getDayEvents: (state, day: number) => state.events[day],
    getSelectedEvent: (state) => state.selectedEvent,
  },
})

export const {
  setMonthIndex,
  setDaySelected,
  addEvent,
  updateEvent,
  removeEvent,
  setShowModalToggle,
  setSelectedEvent,
} = calendarSlice.actions

export const { showModal, getMonthIndex, getSelectedDay, getDayEvents, getSelectedEvent } =
  calendarSlice.selectors

export default calendarSlice.reducer
