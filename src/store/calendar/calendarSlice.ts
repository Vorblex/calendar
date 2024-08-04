import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TState = {
  monthIndex: number
  selectedDay: string | null
}

const initialState: TState = {
  monthIndex: 0,
  selectedDay: null,
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setMonthIndex: (state, action: PayloadAction<number>) => {
      state.monthIndex = action.payload
    },
    setDaySelected: (state, action: PayloadAction<string>) => {
      state.selectedDay = action.payload
    },
  },
  selectors: {
    getMonthIndex: (state) => state.monthIndex,
    getSelectedDay: (state) => state.selectedDay,
  },
})

export const { setMonthIndex, setDaySelected } = calendarSlice.actions
export const { getMonthIndex, getSelectedDay } = calendarSlice.selectors

export default calendarSlice.reducer
