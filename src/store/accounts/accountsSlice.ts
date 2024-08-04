import { TAccount } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: TAccount[] = []

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<TAccount>) => {
      state.push(action.payload)
    },
  },
  selectors: {
    getAccount: (state, email: string) => state.find((account) => account.email === email),
  },
})

export const { addAccount } = accountsSlice.actions
export const { getAccount } = accountsSlice.selectors

export default accountsSlice.reducer
