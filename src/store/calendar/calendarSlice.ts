import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TState = {
  monthIndex: number
}

const initialState: TState = {
  monthIndex: 0,
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setMonthIndex: (state, action: PayloadAction<number>) => {
      state.monthIndex = action.payload
    },
  },
  selectors: {
    getMonthIndex: (state) => state.monthIndex,
  },
})

export const { setMonthIndex } = calendarSlice.actions
export const { getMonthIndex } = calendarSlice.selectors

export default calendarSlice.reducer
