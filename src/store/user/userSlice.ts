import { TUser } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: TUser = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<TUser>) => {
      state.email = action.payload.email
      state.name = action.payload.name
    },
    removeUserState: (state) => {
      state.email = ''
      state.name = ''
    },
  },
  selectors: {
    isLoggedIn: (state) => !!state.email,
  },
})

export const { setUserState, removeUserState } = userSlice.actions
export const { isLoggedIn } = userSlice.selectors

export default userSlice.reducer
