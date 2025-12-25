import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  userId: string | null
  userName: string | null
}

const initialState: AuthState = {
  userId: null,
  userName: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ userId: string; userName: string }>
    ) => {
      state.userId = action.payload.userId
      state.userName = action.payload.userName
    },
    clearAuth: (state) => {
      state.userId = null
      state.userName = null
    }
  }
})

export const { setAuth, clearAuth } = authSlice.actions
export default authSlice.reducer
